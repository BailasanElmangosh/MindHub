var student = angular.module('student-app', ['ngRoute','ngMessages','ngCookies']);
    student.config(function ($routeProvider, $locationProvider) {

        $routeProvider.when('/profile',
            {
            templateUrl: "/angularcomponents/student/template/profile.html",
            controller: 'studentProfileCtrl'  
           }).when('/newsfeed',
           {
           templateUrl: "/angularcomponents/student/template/newsFeed.html",
           controller: 'newFeedCtrl'  
          }).when('/Search',
          {
          templateUrl: "/angularcomponents/student/template/searchResult.html",
          controller: 'searchResultCtrl'  
         }).when('/FriendProfile',
         {
         templateUrl: "/angularcomponents/student/template/friendProfie.html",
         controller: 'searchResultCtrl'  
        })
          .when('/', {
            templateUrl: '/angularcomponents/student/template/newsFeed.html',
            controller: 'newFeedCtrl'
         })
         .otherwise({redirectTo:'/'});
    });
    
      student.filter('formatDate', function($filter) {
        // alert('hii');
        return function (myDate) {
          if(typeof myDate === 'undefined') {
            return myDate;
          }
          
          var date = myDate;
          var dateNow = Date.now(); 
         
          var min =60*1000; 
          var hour= 60*60*1000;  
          var day = 24*60*60*1000;
          var month =30*24*60*60*1000;  
                      
          var firstDate = new Date(date);
          var secondDate = new Date(dateNow);
    
          var Min = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(min)));
          var Hours = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(hour))); 
          var Days = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(day)));
          var Months = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(month)));  
          if(Min<=59)
          {
            return Min+' Min ago'
          } 
          if(Hours<=23)
          {
            return Hours+' Hours ago'
          }   
          else
          {   if(Days<=29)
            {
              return Days+' Days ago'
            }
            return Months+' Months ago'
          }
        };
      });
      angular.module('student-app').service('Person', function() {
        var show = true;
        this.getshow = function() {
            return show;

        };
        this.setshow = function(Show) {
            show = Show;
        };

   })
      student.controller("studentCtrl",function($scope,$cookies,Person){

        $scope.logout=function()
        {
          $cookies.remove('token');
          window.location ="/index.html";
        }
          $scope.hideDropDown=true;
          $scope.showDropDown=function()
          {
            $scope.hideDropDown=!$scope.hideDropDown;
          }
          $scope.show=function ()
          {
             return Person.getshow();
          };
          console.log($scope.show+"main")
          $scope.restartSplashScreen=function()
          {  Person.setshow(true)
            if()
            {
              
            }
            console.log(Person.getshow()+"click news")
          }
          
      });
    
     
