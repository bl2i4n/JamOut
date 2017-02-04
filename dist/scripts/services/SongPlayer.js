(function(Fixtures){
    function SongPlayer() {
        var SongPlayer = {};
        
        //method used to store album info
        var currentAlbum = Fixtures.getAlbum();

        /*
        *@desc Buzz object audio file
        *@type {Object}
        */
        var currentBuzzObject = null;
        
        /**
        *@function setSong
        *@desc Stops currently playing song and loads new audio file as currentBuzzObject
        *@param {Object} song
        */
        var setSong = function(song) {
            if (currentBuzzObject) {
                currentBuzzObject.stop();
                SongPlayer.currentSong.playing = null;
            }
            
            currentBuzzObject = new buzz.sound(song.audioUrl, {
               formats: ['mp3'],
                preload: true
            });
            
            SongPlayer.currentSong = song;
            
        };
        
        /**
        *@function getSongIndex
        *@desc holds index of song
        *@param {Object} song
        */
        var getSongIndex= function(song) {
            return album.songs.indexOf(song);
        };
        
        
        /**
        *@desc Active song object from list of songs
        *type {Object}
        */
        //make SongPlayer.currentSong public
        SongPlayer.currentSong = null;
        
        /*
        *@function playSong
        *@desc initiates play for currently playing song and sets current song to true
        *@param {Object} song
        */
        
        var playSong = function(song){
            currentBuzzObject.play();
            song.playing = true; 
        }
       
        /**
        *@function play
        *@desc Play current or new song
        *@param {Object} song
        */
        //play method for the function SongPlayer
        SongPlayer.play = function(song) {
            song = song || SongPlayer.currentSong;
            if(SongPlayer.currentSong !== song){
                    setSong(song);
                    playSong(song);
                } else if (SongPlayer.currentSong === song){
                    if(currentBuzzObject.isPaused()){
                        playSong(song);
                    }
                }
            };
        
        /*
        *@function pause
        *@desc pause current song by setting currentBuzzObject and using pause method
        *@param {Object} song
        */
        SongPlayer.pause = function(song){
                song = song || SongPlayer.currentSong;
                currentBuzzObject.pause();
                song.playing = false;
        };
        
        /*
        *@function previous
        *@desc sets a variable currentSongIndex and uses getSongIndex variable to get the song index of the current song from songPlayer
        then decrements by 1
        */
        SongPlayer.previous = function(){
            var currentSongIndex = getSongIndex(SongPlayer.currentSong);
            currentSongIndex--;
            
            if (currentSongIndex < 0){
                currentBuzzObject.stop();
                SongPlayer.currentSong.playing = null;
            } else {
                var song = currentAlbum.songs[currentSongIndex];
                setSong(song);
                playSong(song);
            }
            
        };
        
        return SongPlayer; // service returns this object makings its properties and methods public to the rest of the application
    }
    
    angular
        .module('blocJams')
        .factory('SongPlayer', ['$rootScope', 'Fixtures', SongPlayer]);
    
})();