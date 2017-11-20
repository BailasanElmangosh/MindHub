newsFeedApp.factory("feedSrv",function($http){
    return {
        getFeed : function(token){
             return $http({
                 method: "Get",
                 url: "http://localhost:2449/api/newsfeed",
                 headers: 
                 {   'Content-Type': 'application/json',
                     'Authorization':' bearer '+token
                 }
             })
        }
    }
});