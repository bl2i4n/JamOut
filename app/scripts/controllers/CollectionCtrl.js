(function(){
    function CollectionCtrl() {
        this.album = [ ];
        for(var i =0; i < 12; i++){
            this.albums.push(angular.copy(albumPicasso));   
        }
    }
    
    angular
        .module('blocJams')
        .controller('CollectionCtrl', CollectionCtrl);
    
})();