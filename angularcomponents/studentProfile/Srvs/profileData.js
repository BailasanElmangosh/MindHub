studentProfile.factory("profileDataSrv", function ($http,$cookies) {
    return {
           getData: function () {
            return $http({
                method: "Get",
                url: "http://localhost:8178/api/studentprofile",
                headers: 
                {   'Content-Type': 'application/json',
                    'Authorization':' bearer '+ $cookie.get('token')
                }
            })
        }
    }
})