//similar calls to AlbumCtrl see that file for notes

(function(){
    function PlayerBarCtrl(Fixtures, SongPlayer){
        this.albumData = Fixtures.getAlbum();
        this.songPlayer = SongPlayer;
    }
    
    angular
        .module('blocJams')
        .controller('PlayerBarCtrl', ['Fixtures', 'SongPlayer', PlayerBarCtrl]);
    
    
})();