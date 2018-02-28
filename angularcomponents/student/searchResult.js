

angular.module('student-app').factory("searchSrv", function ($http,$cookies) {
    return {
        resultSearch:function(key)
        { 
            return $http({
                method: "Get",
                url: "http://mindhubgp-001-site1.itempurl.com/api/studentsresult/?key="+key,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization':' bearer '+ $cookies.get('token'),
                }
            });
        }
        }
    }
})