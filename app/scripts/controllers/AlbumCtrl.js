(function(){

function AlbumCtrl(Fixtures, SongPlayer) {

    //create an albumData variable to hold the Fixtures.getAlbum
    this.albumData = Fixtures.getAlbum();
    //create a songPlayer var to hold our SongPlayer object
    this.songPlayer = SongPlayer;
}
    //inject/callback for usage
    angular
        .module('blocJams')
        .controller('AlbumCtrl', ['Fixtures', 'SongPlayer', AlbumCtrl]);
    
})();
