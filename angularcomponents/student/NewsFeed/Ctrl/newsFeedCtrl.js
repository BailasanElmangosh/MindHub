
    angular. module("student-app")
    .controller("newFeedCtrl", function ($scope,$http,$cookies,feedSrv,questionsSrv,$timeout,Person) {
    
        $scope.Feeds ={};
        $scope.hideUnFollow=true                       
        $scope.hideFollow=false                
        $scope.studentData={};
        feedSrv.getFeed($cookies.get('token'))
        .success(function(data){
            if(data.status=="Success"){
                $scope.Feeds =data.feed;
                $scope.studentData = data.studentData;
                $scope.suggestedStudents = data.suggestedStudents;
                Person.setshow(false);
                Person.setImg("http://gpmhhost-001-site1.ftempurl.com/"+$scope.studentData.image);
            }
        })
        .error(function(){
        });
       
        $scope.question={};
        $scope.addQuestion = function(){
            questionsSrv.Create($scope.question,$cookies.get('token'))
                .success(function(data){
                    data.question.image = $scope.studentData.image;
                    $scope.Feeds.unshift(data.question);  
                    $scope.question.QuestionHead = '';
                    console.log(data)               
                    
                })
                .error(function(){})
        };

        $scope.FollowFriend = function(id)
        {
            $http({
                method:"Get",
                url:"http://gpmhhost-001-site1.ftempurl.com/api/followfriend/?friendid="+id,
                headers: 
                {   'Content-Type': 'application/json',
                    'Authorization':' bearer '+$cookies.get('token')
                }
            }).success(function(data){
                $scope.hideFollow=true;
                $scope.hideUnFollow=false;                               
                if(data.Status =="Success"){
                    alert("Friend Followed");
                }
                else{
                    alert(data)
                }
            })
        }
        $scope.UnFollowFriend = function(id)
        {
            $http({
                method:"Get",
                url:"http://gpmhhost-001-site1.ftempurl.com/api/unfollowfriend/?id="+id,
                headers: 
                {   'Content-Type': 'application/json',
                    'Authorization':' bearer '+$cookies.get('token')
                }
            }).success(function(data){
                $scope.hideUnFollow=false;
                $scope.hideFollow=true;                             
                if(data.Status =="Success"){
                    alert("Friend Followed");
                }
                else{
                    alert(data)
                }
            })
        }
        $scope.newAnswer={};     
        $scope.addAnswer = function(key,id){
            $scope.newAnswer[key].questionId=id;  
            questionsSrv.CreateAnswer($scope.newAnswer[key],$cookies.get('token'))
                        .success(function(data){
                            if(data.status =="Success"){
                                $scope.newAnswer[key].userImage =data.addedAnswer.userImage;
                                $scope.newAnswer[key].username = data.addedAnswer.username;
                                $scope.newAnswer[key].date = data.addedAnswer.date;
                                $scope.newAnswer[key].title = data.addedAnswer.title;
                                $scope.newAnswer[key].gender = data.addedAnswer.gender;
                                $scope.Feeds[key].answers.unshift($scope.newAnswer[key]);        
                                $scope.newAnswer={};    
                                console.log(data)               
                            }
                        })  
                        .error(function(){});   
            };

    });


    