landingPage.factory("loginSrv", function ($http) {
    return {
        login: function (user) {
            return $http({
                method: "Post",
                url: "http://mindhubgp-001-site1.itempurl.com/api/Login",
                data: user,
                headers: 
                {
                     'Content-Type': 'application/json'
                }
            })
        }
    }
})