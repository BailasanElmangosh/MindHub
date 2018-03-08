angular.module("student-app")
.controller("liveCoursesCtrl",function($scope,$routeParams,$http,Person){
    $http({
        url:"http://mindhubgp-001-site1.itempurl.com/api/getalllcoursesforstudents",
        method:"Get"
    }).success(function(data){
        if(data.status =="Success"){
            $scope.getLiveCoures = data.courses;
        }
    })
})
