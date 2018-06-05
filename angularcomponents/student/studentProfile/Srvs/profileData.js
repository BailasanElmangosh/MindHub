angular.module('student-app').factory("profileDataSrv", function ($http,$cookies) {
    return {
           getData: function () {
            return $http({
                method: "Get",
                url: "http://gpmhhost-001-site1.ftempurl.com/api/studentprofile",
                headers: 
                {   'Content-Type': 'application/json',
                    'Authorization':' bearer '+ $cookies.get('token')
                }
            })
        }
    }
})