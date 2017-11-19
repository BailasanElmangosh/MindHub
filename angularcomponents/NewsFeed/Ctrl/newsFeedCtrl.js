(function () {
    newsFeedApp
    .controller("newFeedCtrl", function ($scope,$cookies,feedSrv ) {

        $scope.Feeds ={};

        feedSrv.getFeed($cookies.get('token'))
        .success(function(data){
            if(data.status=="Success"){
                $scope.Feeds =data.feed;
            }
        })
        .error(function(){
        });
        
    })
})();