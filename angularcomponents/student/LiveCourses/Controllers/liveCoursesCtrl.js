angular.module("student-app")
.controller("liveCoursesCtrl",function($scope,$routeParams,$http,Person){
    $http({
        url:"http://mindhubgp1-001-site1.gtempurl.com/api/getalllcoursesforstudents",
        method:"Get"
    }).success(function(data){
        if(data.status =="Success"){
            $scope.getLiveCoures = data.courses;
        }
    })
})
