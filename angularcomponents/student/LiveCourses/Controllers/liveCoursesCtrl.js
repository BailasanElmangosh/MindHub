angular.module("student-app")
.controller("liveCoursesCtrl",function($scope,$routeParams,$http,Person){
    $http({
        url:"http://gpmhhost-001-site1.ftempurl.com/api/getalllcoursesforstudents",
        method:"Get"
    }).success(function(data){
        if(data.status =="Success"){
            $scope.getLiveCoures = data.courses;
        }
    })
})
