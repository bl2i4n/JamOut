//use controllers for the logic behind each behavior
//define a controller for the Landing view
(function() {
    function LandingCtrl(){
        this.heroTitle = "Turn the Music Up!";
    };
    
    //this portion is the callback for using this function when it is called
    angular
        .module('blocJams')
    //constructors are capitalized
        .controller('LandingCtrl', LandingCtrl);
    //two parameters
    //1. name of controller
    //2.callback function that injects dependencies, with a callback functiona s the last item in the array
})();