angular. module("student-app").factory("feedSrv",function($http){
    return {
        getFeed : function(token){
             return $http({
                 method: "Get",
                 url: "http://mindhubgp1-001-site1.gtempurl.com/api/newsfeed",
                 headers: 
                 {   'Content-Type': 'application/json',
                     'Authorization':' bearer '+token
                 }
             })
        }
    }
});