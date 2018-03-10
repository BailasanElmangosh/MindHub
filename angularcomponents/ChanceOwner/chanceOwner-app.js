
// var chanceOwner=angular.module('chanceOwner-app');
'use strict';
var chanceOwner=angular.module('chanceOwner-app',['ngRoute','ngMessages','ngCookies']);
chanceOwner.config(function($routeProvider, $locationProvider){ 
    $routeProvider.when('/liveCourse',
    {
    templateUrl: "/angularcomponents/ChanceOwner/Template/liveCourse.html",
    controller: 'showCouresCtrl'  
   }).when('/createLive',{
        templateUrl: "/angularcomponents/ChanceOwner/Template/CreateLive.html",
        controller: 'createCouresCtrl' 
    }).when('/liveRoom/:roomId',{
        templateUrl: "/angularcomponents/ChanceOwner/Template/liveRoom.html",
        controller: 'liveRoomCtrl' 
    })
});