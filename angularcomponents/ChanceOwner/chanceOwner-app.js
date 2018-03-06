
// var chanceOwner=angular.module('chanceOwner-app');
'use strict';
var chanceOwner=angular.module('chanceOwner-app',['ngMessages','ngCookies','ngRoute']);
chanceOwner.config(function($routeProvider, $locationProvider){ 
    $routeProvider.when('/liveCourse',{
        templateUrl: "/angularcomponents/ChanceOwner/Template/liveCourse.html",
            controller: 'liveCouresCtrl' 

    }).when('/createLive',{
        templateUrl: "/angularcomponents/ChanceOwner/Template/CreateLive.html",
        controller: 'liveCouresCtrl' 
    })
});