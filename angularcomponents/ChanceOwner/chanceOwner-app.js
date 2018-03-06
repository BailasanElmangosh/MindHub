
// var chanceOwner=angular.module('chanceOwner-app');
'use strict';
var chanceOwner=angular.module('chanceOwner-app',['ngMessages','ngCookies']);
chanceOwner.config(function($routeProvider, $locationProvider){ 
    $routeProvider.when('/liveCourse',{
        templateUrl: "/angularcomponents/student/template/profile.html",
            controller: 'liveCouresCtrl' 

    }).when('/createLive',{
        templateUrl: "/angularcomponents/ChanceOwner/Template/CreateLive.html",
        controller: 'liveCouresCtrl' 
    })
});

alert('hi');