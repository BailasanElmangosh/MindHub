(function () {
    newsFeedApp
    .controller("newFeedCtrl", function ($scope,$cookies,feedSrv,questionsSrv) {

        $scope.Feeds ={};

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
                })
                .error(function(){})
        };

    });
})();