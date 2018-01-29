(function () {
    'use strict';
    var app = angular.module("myapp",[]);  
    app.controller("usercontroller", function($scope,$http){  
        $scope.countryList =[];
      $scope.skills=function(){
        return   $http({
            method: "Get",
            url: "http://mindhubgp-001-site1.itempurl.com//api/allskills",
            headers: {
                'Content-Type': 'application/json'
            }
        });
        
      } 
     
      $scope.skills()
       .success(function(data, status){
        $scope.skillList= data.skills;
       });
         
         $scope.complete = function(string){  
              $scope.hidethis = false;  
              var output = [];  
              angular.forEach($scope.skillList, function(skill){  
              
                   if(skill.name.toLowerCase().indexOf(string.toLowerCase()) >= 0)  
                   {  
                        output.push(skill.name);  
                   }  
              });  
              $scope.filterSkill = output;  
         }  
         $scope.fillTextbox = function(string){  
              $scope.skill = string;  
              $scope.hidethis = true;  
         }  
    })
  })();
  
  