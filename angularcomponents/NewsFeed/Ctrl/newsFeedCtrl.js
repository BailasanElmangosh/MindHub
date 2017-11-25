(function () {
    angular. module("newsFeedApp")
    .controller("newFeedCtrl", function ($scope,$cookies,feedSrv,questionsSrv) {

        $scope.Feeds ={};
        $scope.img="test";
        $scope.imgPath = function(path)
        {
            $scope.img = path;
            $scope.$apply();
        }


        $scope.studentData={};
        feedSrv.getFeed($cookies.get('token'))
        .success(function(data){
            if(data.status=="Success"){
                $scope.Feeds =data.feed;
                $scope.studentData = data.studentData;
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
                    console.log(data.question);
                })
                .error(function(){})
        };

        $scope.newAnswer={};     
        $scope.addAnswer = function(key,id){
            $scope.newAnswer[key].questionId=id;
            console.log($scope.Feeds[key]);      
            questionsSrv.CreateAnswer($scope.newAnswer[key],$cookies.get('token'))
                        .success(function(data){
                            if(data.status =="Success"){
                                $scope.newAnswer[key].userImage = data.addedAnswer.userImage;
                                $scope.newAnswer[key].username = data.addedAnswer.username;
                                $scope.Feeds[key].answers.unshift($scope.newAnswer[key]);        
                                $scope.newAnswer={};                   
                            }
                        })  
                        .error(function(){});   
            };


    });
})();

$(function () {
    $("#press").on("click", function () {
        angular.element($("#jquery")).scope().callFromJquery('I Called You ! Angular !');
    });
});