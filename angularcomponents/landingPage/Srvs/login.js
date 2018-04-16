landingPage.factory("loginSrv", function ($http) {
    return {
        login: function (user) {
            return $http({
                method: "Post",
                url: "http://mindhubgp1-001-site1.gtempurl.com//api/Login",
                data: user,
                headers: 
                {
                     'Content-Type': 'application/json'
                }
            })
        }
    }
})