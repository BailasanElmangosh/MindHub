(function () {
    
    studentProfile.controller("studentProfileCtrl", function ($scope,profileDataSrv,profileEditSrv,$cookies) {
            $scope.profileData={};
            $scope.editProfile={};
            $scope.maleImg = "../../../images/default.png";
            $scope.FemaleImg = "../../../images/defaultfemale.jpg";

            profileDataSrv.getData()
            .success(function (data, status) {
                $scope.profileData=data.profile;
                $scope.editProfile=data.profile;
                console.log($scope.profileData);

            });

            $scope.limit=2;
            $scope.comment=function(num)
            {
                $scope.limit=num;
                angular.element('#scrollComment')
                .css(
                    {
                        'height': '100px',
                        'width':'90%',
                        'height': '150px',
                        'margin': '0 auto',
                        'overflow-y':'scroll',
                        'overflow-x':'hidden',
                        'position': 'relative',
                        ' .scrollComment::-webkit-scrollbar-track': '{ " -webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.3)","background-color": "#8ccb75"}',
                        ' .scrollComment::-webkit-scrollbar': '{ "width": "10px","background-color": "#F5F5F5"}',
                        ' .scrollComment::-webkit-scrollbar-thumb': '{ "border": " 2px solid #555555","background-color": "#555555"}',
                        
                    
                   
                    }
                   
                );

               
                
                //     '::-webkit-scrollbar-track'
                //     {
                //         -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
                //         background-color: #F5F5F5;
                //     }
                    
                //     &::-webkit-scrollbar
                //     {
                //         width: 10px;
                //         background-color: #F5F5F5;
                //     }
                    
                //    &::-webkit-scrollbar-thumb
                //     {
                //         background-color: #555555;
                //         border: 2px solid #555555;
                //     }
            }
            $scope.savedata=function()
            { 
                $scope.somedata=
                {
                    schholYearFrom:$scope.editProfile.schholYearFrom,
                    schholYearTo:$scope.editProfile.schholYearTo,
                    school:$scope.editProfile.school,
                    UniverstyYearFrom:$scope.editProfile.universtyYearFrom,
                    UniverstyYearTo:$scope.editProfile.universtyYearTo,
                    school:$scope.editProfile.school,
                    Universty:$scope.editProfile.university,
                    info:$scope.editProfile.info, 
                    title:$scope.editProfile.title, 
                    applicationUserId:$scope.editProfile.userId,
                    id:$scope.editProfile.profileId,
                    username:$scope.editProfile.username,
                    gender:$scope.editProfile.gender,
                    birthdate:$scope.editProfile.birthdate
                 }
                 console.log($scope.editProfile);
                 console.log($scope.somedata);

                profileEditSrv.editData($scope.somedata)
                .success(function(data, status){
                   console.log(data);
                });
            }
           
            
           
            //Skills

               //  Get ALL skills
               $scope.getskill={};
               profileEditSrv.skillsGet()
                .success(function(data, status){
                    $scope.getskill= data.skills;
                });
               //add skill
               $scope.skill={};
             
              
               $scope.addSkill=function(skillid,studentid){
                $scope.skilladd=
                {
                    SkillId:skillid, 
                    StudentId:studentid
                }
                    console.log($scope.skilladd)

                profileEditSrv.addSkill($scope.skilladd)
                 .success(function(data, status){
                        $scope.data=
                        {
                            id:data.id, 
                            skillName: data.skillName
                        }
                     if(status="Success")
                     { 
                         $scope.profileData.skills.push($scope.data)
                     }
                 });
               };
                // delete skill
               
                $scope.remove = function(array, index){
                    array.splice($scope.profileData.skills.indexOf(index), 1);
                    }
                $scope.delete=function(array,index,id)
                {  
                    $scope.delskill=
                    { id:id };
                    $scope.remove(array, index);
                    profileEditSrv.deleteSkill($scope.delskill)
                    .success(function(data, status){
                        if(status="Success")
                        {
                        }
                    });
                            
                };
               
               //upload Image
            //    $scope.url={};
            //    var url =$scope.url.img
            //    console.log(url);
            //    var namesArr = [];
            //    $scope.fileNameChanged = function (ele) {
            //     var files = ele.files;
            //     console.log(files)
            //     var l = files.length;
            //   }
                // $scope.uploadimage=function(ele)
                // {   console.log(ele.files);
                //     var fd= new FormData();
                //     fd.append('file',ele.files)
                //     fd.append('name',"bailasan")
                //     profileEditSrv.uploadImage(fd)
                //     .success(function(data, status){
                //         if(status="Success")
                //         {
                //         }
                //     });

                // };
               console.log($cookies.get('token'))
   
            });
             
})();
