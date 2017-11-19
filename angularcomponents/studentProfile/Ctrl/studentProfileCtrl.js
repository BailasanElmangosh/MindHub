(function () {
    
    studentProfile.controller("studentProfileCtrl", function ($scope,profileDataSrv,$cookies) {
            $scope.profileData={};
            $scope.maleImg = "../../../images/default.png";
            $scope.FemaleImg = "../../../images/defaultfemale.jpg";
            profileDataSrv.getData()
            .success(function (data, status) {
                $scope.profileData=data.profile;
                console.log($scope.profileData.friends)
            });
      
       
            
    });

})();
