angular.module('student-app').factory("profileDataSrv", function ($http,$cookies) {
    return {
           getData: function () {
            return $http({
                method: "Get",
                url: "http://mindhubgp1-001-site1.gtempurl.com/api/studentprofile",
                headers: 
                {   'Content-Type': 'application/json',
                    'Authorization':' bearer '+ $cookies.get('token')
                }
            })
        }
    }
})