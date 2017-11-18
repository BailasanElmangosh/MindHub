(function () {
    
    studentProfile.controller("studentProfileCtrl", function ($scope,profileDataSrv,$cookies) {
            $scope.profileData={};
         
            profileDataSrv.getData()
            .success(function (data, status) {
                $scope.profileData=data.profile;
                console.log($scope.profileData.friends)
            });
      
       
            
    });

})();
