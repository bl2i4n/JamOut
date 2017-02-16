(function(){
    function CollectionCtrl(Fixtures) {
        
        //create an albums variable to hold the Fixtures.getCollection method 12 times
        this.albums = Fixtures.getCollection(12);
    }
    
    angular
        .module('blocJams')
        .controller('CollectionCtrl', ['Fixtures', CollectionCtrl]);
    
})();