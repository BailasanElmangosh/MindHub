angular.module("student-app")
.controller("friendProfileCtrl",function($scope,$routeParams,$http,Person){

    $scope.GetProfile = function(){
        $http({
            url:"http://gpmhhost-001-site1.ftempurl.com/api/otherstudentprofile/?id="+$routeParams.studentId,
            method:"Get"
        }).success(function(data){
            if(data.status == "Success")
            {
                $scope.profileData =  data.studentProfile;
                $scope.imgPath="http://gpmhhost-001-site1.ftempurl.com/"+$scope.profileData.image
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
                return"http://gpmhhost-001-site1.ftempurl.com/defaults/female.jpg"
            }
            return $scope.imgPath
        }
        if($scope.profileData.gender=='Male')
        {
            if($scope.profileData.image==null)
            {
                return"http://gpmhhost-001-site1.ftempurl.com/defaults/male.png"
            }
            return $scope.imgPath
        }
    }
})