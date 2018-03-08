angular.module("student-app")
.controller("friendProfileCtrl",function($scope,$routeParams,$http,Person){

    $scope.GetProfile = function(){
        $http({
            url:"http://mindhubgp-001-site1.itempurl.com/api/otherstudentprofile/?id="+$routeParams.studentId,
            method:"Get"
        }).success(function(data){
            if(data.status == "Success")
            {
                $scope.profileData =  data.studentProfile;
                Person.setshow(false);
            }
        }).error(function(){
        })
    };
    $scope.GetProfile();

})