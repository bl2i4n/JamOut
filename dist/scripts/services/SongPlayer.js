(function(){
    function SongPlayer($rootScope, Fixtures) {
        
        //method used to store album info
        var currentAlbum = Fixtures.getAlbum();
        
        var SongPlayer = {};

        /*
        *@desc Buzz object audio file
        *@type {Object}
        */
        var currentBuzzObject = null;
        
        /**
        *@function getSongIndex
        *@desc holds index of song
        *@param {Object} song
        */
        var getSongIndex= function(song) {
            return currentAlbum.songs.indexOf(song);
        };        
        
        
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
        *@desc Active song object from list of songs
        *type {Object}
        */
        //make SongPlayer.currentSong public
        SongPlayer.currentSong = null;
        
        /*
        *@desc Current playback time (in seconds) of currently playing song
        *@type {Number}
        */
        SongPlayer.currentTime = null;
        
        /**
        *@function setCurrentTime
        *@desc Set current time (in seconds) of currently playing song
        *@param {Number} time
        */
        SongPlayer.setCurrenTime = function(time){
            if(currentBuzzObject){
                currentBuzzObject.setTime(time);
            }
        };

        
        /*
        *@function playSong
        *@desc initiates play for currently playing song and sets current song to true
        *@param {Object} song
        */
        var playSong = function(song){
            currentBuzzObject.play();
            song.playing = true; 
        }
        
        var stopSong = function(song){
            currentBuzzObject.stop();
            song.playing = null;
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
                    if(currentBuzzObject.pause()){
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
                stopSong(SongPlayer.currentSong);
            } else {
                var song = currentAlbum.songs[currentSongIndex];
                setSong(song);
                playSong(song);
            }
            
        };
        
        /*
        *@function next
        *@desc sets a variable currentSongIndex and uses getSongIndex variable to get the song index of the current song from songPlayer
        then increments by 1 for the next song
        */        
        SongPlayer.next = function(){
//            debugger;

            var currentSongIndex = getSongIndex(SongPlayer.currentSong);
            currentSongIndex++;
            
            //|| currentSongIndex >= currentAlbum.songs.length-1
            if (currentSongIndex <= 0 || currentSongIndex > currentAlbum.songs.length-1){
                //when we are at the last song we want to just stop playing songs
                //call the stopSong function which calls the song
                
                stopSong(SongPlayer.currentSong);
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