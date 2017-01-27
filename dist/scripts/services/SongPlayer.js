(function(){
    function SongPlayer() {
        var SongPlayer = {};
        
        var currentSong = null;
        var currentBuzzObject = null;
        
        
        //play method for the function SongPlayer
        SongPlayer.play = function(song) {
            console.log(song);
            if(currentSong !== song){
                if(currentBuzzObject){
                    currentBuzzObject.stop();
                    currentSong.playing = null;
                } else if (currentSong === song){
                    if(currentBuzzObject.isPaused()){
                        currentBuzzObject.play();
                    }
                }
            
                currentBuzzObject = new buzz.sound(song.audioUrl, {
                    formats: ['mp3'],
                    preload: true
             
                });
            
            currentSong = song;
            
                currentBuzzObject.play();
                song.playing = true;
            }
        };
        
        
        SongPlayer.pause = function(song){
                currentBuzzObject.pause();
                song.playing = false;
        };
        
        
        return SongPlayer; // service returns this object makings its properties and methods public to the rest of the application
    }
    
    angular
        .module('blocJams')
        .factory('SongPlayer', SongPlayer);
    
})();