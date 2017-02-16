(function(){
    //sets up the config for the states and behaviors of our app
    function config($stateProvider, $locationProvider){
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
        });
        
        $stateProvider
            //depending on which state is chosen below
            //direct the page to that template, or go to that url
            .state('landing', { // takes us to the landing page
                url: '/',
                controller: 'LandingCtrl as landing', //sets up alias landing
                templateUrl: '/templates/landing.html'
            })
           
            .state('album', { 
                url: 'album',
                controller: 'AlbumCtrl as album', //sets up alias album
                templateUrl: '/templates/album.html'
            })
            
            .state('collection', {
                url: 'collection',
                controller: 'CollectionCtrl as collection', //alias collection
                templateUrl: '/templates/collection.html'
        });
    };
    
    angular
        .module('blocJams', ['ui.router']) // ui.router is for uisref for new type of linking
        .config(config);
})();
