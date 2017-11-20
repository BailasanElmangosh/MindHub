(function () {
    
    studentProfile.controller("studentProfileCtrl", function ($scope,profileDataSrv,profileEditSrv,$cookies) {
            $scope.profileData={};
            $scope.maleImg = "../../../images/default.png";
            $scope.FemaleImg = "../../../images/defaultfemale.jpg";

            profileDataSrv.getData()
            .success(function (data, status) {
                $scope.profileData=data.profile;
                
            });
            console.log($scope.profileData.userId);
       
            //Skills

               //  Get ALL skills
               $scope.getskill={};
               profileEditSrv.skillsGet()
                .success(function(data, status){
                    $scope.getskill= data.skills;
                });
               //add skill
               $scope.skill={};
               $scope.skilladd =
               { 
               };
              
               $scope.addSkill=function(){
                profileEditSrv.addSkill($scope.skilladd)
                 .success(function(data, status){
                     if(status="Success")
                     {
                         alert('done')
                     }
                 });
               };
                // delete skill
                $scope.delskill={};
                $scope.remove = function(array, index){
                    array.splice($scope.getskill.indexOf(index), 1);
                    }
                $scope.delete=function(array, index ,id){
                    $scope.remove(array, index);
                    profileEditSrv.deleteSkill( id)
                    .success(function(data, status){
                        //  alert(data.status);
                    });
                            
                    };
    });

})();
