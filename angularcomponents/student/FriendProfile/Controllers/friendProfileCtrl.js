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
                $scope.imgPath="http://mindhubgp-001-site1.itempurl.com/"+$scope.profileData.image
                Person.setshow(false);
                console.log($scope.profileData )
                $scope.img();
            }
        }).error(function(){
        })
    };
    $scope.GetProfile();
    $scope.img=function()
    {  
        if($scope.profileData.gender=='Female')
        {
            if($scope.profileData.image==null)
            {
                return"http://mindhubgp-001-site1.itempurl.com/defaults/female.jpg"
            }
            return $scope.imgPath
        }
        if($scope.profileData.gender=='Male')
        {
            if($scope.profileData.image==null)
            {
                return"http://mindhubgp-001-site1.itempurl.com/defaults/male.png"
            }
            return $scope.imgPath
        }
    }
})