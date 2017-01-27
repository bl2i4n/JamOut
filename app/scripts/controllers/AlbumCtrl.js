(function(){


function AlbumCtrl(Fixtures, SongPlayer) {
//        var vm = this;
//        vm.albumData = angular.copy(albumPicasso);
    this.albumData = Fixtures.getAlbum();
    this.songPlayer = SongPlayer;
}
//        vm.do_something = show_alert;
        
//        activate(); 

/*
        function activate() {
            console.log("Hi, from the AlbumCtrl!");
            vm.do_something("Hello aert mesg");
        }
        
        function show_alert(msg){
            alert(vm.albumData.title);
            alert(this.albumData.title);
            alert(msg);
        };
    }
  */  
    angular
        .module('blocJams')
        .controller('AlbumCtrl', ['Fixtures', 'SongPlayer', AlbumCtrl]);
    
})();


