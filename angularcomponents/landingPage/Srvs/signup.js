
landingPage.factory("signupSrv", function ($http) {
    return {
        signUp: function (user)  {
            return $http({
                method: "Post",
                url: "http://mindhubgp-001-site1.itempurl.com/api/Signup",
                headers: {
                    'Content-Type': 'application/json' 
                },
                 data: user,
            });    
        }
    }
})