angular. module("student-app").factory("feedSrv",function($http){
    return {
        getFeed : function(token){
             return $http({
                 method: "Get",
                 url: "http://mindhubgp-001-site1.itempurl.com/api/newsfeed",
                 headers: 
                 {   'Content-Type': 'application/json',
                     'Authorization':' bearer '+token
                 }
             })
        }
    }
});