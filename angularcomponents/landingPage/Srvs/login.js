landingPage.factory("loginSrv", function ($http) {
    return {
        login: function (user) {
            return $http({
                method: "Post",
                url: "http://gpmhhost-001-site1.ftempurl.com/api/Login",
                data: user,
                headers: 
                {
                     'Content-Type': 'application/json'
                }
            })
        }
    }
})