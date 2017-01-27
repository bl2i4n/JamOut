(function(){
    angular
        .module('blocJams')
        .controller('AlbumCtrl', AlbumCtrl);

    function AlbumCtrl() {
        var vm = this;

        vm.albumData = albumPicasso;
        vm.do_something = show_alert;
        
        activate(); 
        
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
    
})();