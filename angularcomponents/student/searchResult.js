

angular.module('student-app').factory("searchSrv", function ($http,$cookies) {
    return {
        resultSearch:function(key)
        { 
            return $http({
                method: "Get",
                url: "http://mindhubgp1-001-site1.gtempurl.com/api/studentsresult/?key="+key,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization':' bearer '+ $cookies.get('token'),
                }
            });
        },
        showProfile:function(id)
        { 
            return $http({
                method: "Get",
                url: "http://mindhubgp1-001-site1.gtempurl.com/api/allstudentsresult/?id="+id,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization':' bearer '+ $cookies.get('token'),
                }
            });
        }
        }
    }
)