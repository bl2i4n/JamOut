(function(){
    function AlbumCtrl() {
        console.log("Hi, from the AlbumCtrl!");
        this.albumData = Fixtures.getAlbum();
    }
    
    angular
        .module('blocJams')
        .controller('AlbumCtrl', ['Fixtures', AlbumCtrl]);
    
})();