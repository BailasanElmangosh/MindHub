
    angular.module('student-app').controller("studentProfileCtrl", function ($cookies,$scope,profileDataSrv,profileEditSrv,questionsSrv,Person) {
            $scope.profileData={};
            $scope.editProfile={};
            $scope.imgPath='';
            $scope.isdisable=false;            
            profileDataSrv.getData()
            .success(function (data, status) {
                $scope.profileData=data.profile;
                console.log($cookies.get('token'))
                $scope.editProfile=data.profile;
                $scope.imgPath="http://gpmhhost-001-site1.ftempurl.com/"+$scope.profileData.image;
                Person.setshow(false);
                Person.setImg($scope.img());
                // // imgCookies.set("imgcookie",$scope.imgPath)
                // $cookies.set("imgCookie",$scope.imgPath);
                // alert($cookies.get("imgCookie"))
            });
         
            $scope.img=function()
            {  
                if($scope.profileData.gender=='Female')
                {
                    if($scope.profileData.image==null)
                    {
                        return"http://gpmhhost-001-site1.ftempurl.com/defaults/female.jpg"
                        console.log('error')
                    }
                    return $scope.imgPath
                }
                if($scope.profileData.gender=='Male')
                {
                    if($scope.profileData.image==null)
                    {
                        return"http://gpmhhost-001-site1.ftempurl.com/defaults/male.png"
                        console.log('error')
                        
                    }
                    return $scope.imgPath
                }
            }
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
 

                profileEditSrv.editData($scope.somedata)
                .success(function(data, status){
             
                });
            }
           $scope.getNewPath=function(data)
           {
            $scope.imgPath="http://gpmhhost-001-site1.ftempurl.com/"+data;
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

                            console.log(skillDropDown.name.toLowerCase().indexOf(string.toLowerCase()))
                            console.log($scope.skillList)
                            if(  angular.isDefined(skillDropDown.name) && skillDropDown.name.toLowerCase().indexOf(string.toLowerCase()) !==-1)  
                            {  
                                 output.push(skillDropDown);  
                                 console.log(output)
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
                       console.log($scope.filterSkill) 
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
                            $scope.skillDropDown="";  
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
               $scope.jquery=function()
               {
                   //    upload image
                   $('#imageUploadForm').on('submit',(function(e) {
                       e.preventDefault();
                       $('#pfSpinner').show();
                       var token = $cookies.get('token');
                       var formData = new FormData(this);
                       var image;
                       $.ajax({
                           type:'POST',
                           url: 'http://gpmhhost-001-site1.ftempurl.com/api/uploadstudentimage',
                           data:formData,
                           headers: {"Authorization": "bearer "+token},
                           cache:false,
                           contentType: false,
                           processData: false,
                           success:function(data){
                               if(data.status=='Success')
                               {   console.log(data);
                                   $scope.getNewPath(data.imagePath);
                                   $('#pfSpinner').hide();
                               }
                               else
                               {  
                               }
                           
                           },
                           error: function(data){
                           }
                       });
                   }));
                   
                   $("#ImageBrowse").on("change", function() {
                       var file=$(this)[0].files[0]
                       if(file.size<=5000000&&file.type=='image/jpeg'||file.type=='image/jpg'||file.type=='image/png')
                       { 
                            $("#imageUploadForm").submit();
                            $scope.sizeTrue();  
                       
                            
                       }
                       else
                       {
                           
                           $scope.sizeFalse();
                       }
                   });
               
               } 
                $scope.jquery();
              //  Add Question 
              $scope.addQues=function()
              {  $scope.isdisable=true;
                  questionsSrv.Create($scope.question,$cookies.get('token'))
                  .success(function(data, status){
                      if(data.status="Success"){
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
                        { 
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
               
                var date = "2017-12-04T15:32:40.5670742";
                var date2 = "2017-12-07T12:32:40.5670742"; 
                var Day = 24*60*60*1000;
                var hours = 60*60*1000;  
                var month =30*24*60*60*1000;       
                var firstDate = new Date(2017,12,04,15,32,40.5670742);
                var secondDate = new Date(date);
                
               
                var diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(Day)));

                //Like & DisLike
                $scope.checkLike=new Array();
                $scope.dislike=0;
                $scope.like=0;              
                $scope.likeDislike=function(questionId,state,count)
                {   
                     $scope.checkLike.push(state);
                    if($scope.checkLike.length==2)
                    {
                        x=$scope.checkLike[0];
                        y=$scope.checkLike[1];
                        if(x==y)
                        { 
                            if(x=='like')
                            {
                                $scope['stateLike'+questionId]='';
                            }
                            else
                            { $scope['stateDisLike'+questionId]='';
                            }
                            $scope.checkLike=[];
                            return;
                        }
                        else
                        {
                            $scope['stateLike'+questionId]=state;
                            $scope['stateDisLike'+questionId]=state;
                            $scope.checkLike=[];
                        }       
                    }
                    else
                    {
                        $scope['stateLike'+questionId]=state;
                        $scope['stateDisLike'+questionId]=state;
                    }
                    $scope.likedata={questionId,state}
                    profileEditSrv.likedislike($scope.likedata).
                    success(function(data, status)
                    { 
                        if(data.status="Success")
                         { 
                            $scope.dislike=data.dislikes;
                            $scope.like=data.likes;                         

                         }
                        else
                        {
                           
                        }
                        
                    });
                }
                //Unfollow
                $scope.removeFollow = function(array, index){
                    array.splice($scope.profileData.friends.indexOf(index), 1);
                    }
               $scope.unfollow=function(array,index,id)
               { 
                $scope.removeFollow(array,index);
                profileEditSrv.unfollow(id).
                success(function(data, status)
                { 

                });
              }
              profileEditSrv.skillsGet()
              .success(function(data, status){
                  $scope.List= data.skills;
              });
          

          
            });
             
