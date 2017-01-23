(function(){
    function AlbumCtrl() {
//        console.log("Hi, from the AlbumCtrl!");
        this.albumData = albumPicasso;
    }
    
    angular
        .module('blocJams')
        .controller('AlbumCtrl', AlbumCtrl);
    
})();


