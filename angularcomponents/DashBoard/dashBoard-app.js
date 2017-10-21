var dashBoard = angular.module('dashBoard-app', ['ngRoute'])
    .config(function ($routeProvider, $locationProvider) {

        $routeProvider.when('/skills',
            {
             
            templateUrl: "/angularcomponents/DashBoard/template/skills.html",
            controller: 'skillsCtrl'  
           })

    });



    