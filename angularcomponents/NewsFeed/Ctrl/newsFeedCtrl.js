(function () {
    newsFeedApp
    .controller("newFeedCtrl", function ($scope,$cookies,feedSrv,questionsSrv) {

        $scope.Feeds ={};

        feedSrv.getFeed($cookies.get('token'))
        .success(function(data){
            if(data.status=="Success"){
                $scope.Feeds =data.feed;
            }
        })
        .error(function(){
        });
       
        $scope.question={};
        $scope.addQuestion = function(){
            questionsSrv.Create($scope.question,$cookies.get('token'))
                .success(function(data){
                    console.log(data);
                })
                .error(function(){})
        };

    });
})();