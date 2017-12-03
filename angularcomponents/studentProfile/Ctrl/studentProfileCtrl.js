
(function () {
    
    studentProfile.controller("studentProfileCtrl", function ($scope,profileDataSrv,profileEditSrv,$cookies,questionsSrv) {
            $scope.profileData={};
            $scope.editProfile={};
            $scope.maleImg = "../../../images/default.png";
            $scope.FemaleImg = "../../../images/defaultfemale.jpg";
            $scope.imgPath='';
            $scope.isdisable=false;            
            profileDataSrv.getData()
            .success(function (data, status) {
                $scope.profileData=data.profile;
                $scope.editProfile=data.profile;
                $scope.imgPath="http://localhost:2449/"+$scope.profileData.image
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
                        ' .scrollComment::-webkit-scrollbar-thumb': '{ "border": " 2px solid #555555","background-color": "#555555"}'
                    }
                );
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
                    birthdate:$scope.editProfile.birthDate,
                    image:$scope.editProfile.image
                 }
                 console.log($scope.editProfile);
                 console.log($scope.somedata);

                profileEditSrv.editData($scope.somedata)
                .success(function(data, status){
                   console.log(data);
                });
            }
           $scope.getNewPath=function(data)
           {
            $scope.imgPath="http://localhost:2449/"+data;
            $scope.$apply();
           }
            //Skills
               //  Get ALL skills
               profileEditSrv.skillsGet()
                .success(function(data, status){
                    $scope.skillList= data.skills;
                  
                });
                  $scope.complete = function(string){  
                       $scope.hidethis = false;  
                       var output = [];  
                      
                       angular.forEach($scope.skillList, function(skillDropDown){  
                            console.log(skillDropDown);
                            if(skillDropDown.name.toLowerCase().indexOf(string.toLowerCase()) >= 0)  
                            {  
                                 output.push(skillDropDown);  
                            }  
                       });  
                       $scope.height=angular.element('#list-group').width()
                       angular.element('#dropdownSkill')
                       .css(
                           {    'border':'3px solid #eee',
                                'border-radius': '10px',
                               'max-height':'100px',
                               'overflow-y':'scroll',
                               'overflow-x':'hidden',
                               ' .scrollComment::-webkit-scrollbar-track': '{ " -webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.3)","background-color": "#8ccb75"}',
                               ' .scrollComment::-webkit-scrollbar': '{ "width": "10px","background-color": "#F5F5F5"}',
                               ' .scrollComment::-webkit-scrollbar-thumb': '{ "border": " 2px solid #555555","background-color": "#555555"}'
                           });
                           angular.element('#dropdownSkill')
                           .css( 'width', $scope.height);
                           angular.element('#error')
                           .css( 'display','none');
                       $scope.filterSkill = output;  
                  }  
                  $scope.fillTextbox = function(string,idS){  
                       $scope.skillDropDown = string;  
                       $scope.hidethis = true;
                       $scope.idSkill=idS;

                  }  
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
                        if(data.status=="Success")
                        { 
                            $scope.profileData.skills.push($scope.data);   
                        }
                        if(data.status=="Failed")
                        { 
                            angular.element('#error')
                            .css( 'display','block');
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
                   
                    });
                            
                };
               
               //upload Image
               $scope.sizeFalse=function()
               {  
                angular.element('#size')
                .css( 'display','block'); 
               }
               $scope.sizeTrue=function()
               {  
                angular.element('#size')
                .css( 'display','none'); 
               }
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

                //Add Question 
                $scope.addQues=function()
                {  $scope.isdisable=true;
                    questionsSrv.Create($scope.question,$cookies.get('token'))
                    .success(function(data, status){
                        if(data.status="Success")
                        { console.log(data);
                            $scope.profileData.questions.unshift(data.question);
                            angular.element('#textareaQues').val('');
                             $scope.isdisable=false;
                    
                        }
                    });
                }
                $scope.newAnswer={};
                $scope.addAnswer=function(key,id)
                {     
                    $scope.newAnswer[key].questionId=id;
                    questionsSrv.CreateAnswer($scope.newAnswer[key],$cookies.get('token'))
                    .success(function(data, status){
                        if(data.status="Success")
                        { console.log('Hii')
                            $scope.newAnswer[key].userImage = data.addedAnswer.userImage;
                            $scope.newAnswer[key].username = data.addedAnswer.username;
                            $scope.newAnswer[key].date = data.addedAnswer.date;
                            $scope.newAnswer[key].title = data.addedAnswer.title;
                            $scope.newAnswer[key].gender = data.addedAnswer.gender;
                            $scope.profileData.questions[key].answers.unshift($scope.newAnswer[key]);        
                            $scope.newAnswer={}; 
                        }
                    });
                }

   
            });
             
})();