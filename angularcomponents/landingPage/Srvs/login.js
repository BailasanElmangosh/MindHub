landingPage.factory("loginSrv", function ($http) {
    return {
        login: function (user) {
            return $http({
                method: "Post",
<<<<<<< HEAD
                url: "http://mindhubgp1-001-site1.gtempurl.com//api/Login",
=======
                url: "http://mindhubgp1-001-site1.gtempurl.com/api/Login",
>>>>>>> 4784e01406ca410e6b69ff850e6472f72382391b
                data: user,
                headers: 
                {
                     'Content-Type': 'application/json'
                }
            })
        }
    }
})