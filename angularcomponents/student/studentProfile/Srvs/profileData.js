angular.module('student-app').factory("profileDataSrv", function ($http,$cookies) {
    return {
           getData: function () {
            return $http({
                method: "Get",
                url: "http://mindhubgp-001-site1.itempurl.com/api/studentprofile",
                headers: 
                {   'Content-Type': 'application/json',
                    'Authorization':' bearer '+ $cookies.get('token')
                }
            })
        }
    }
})