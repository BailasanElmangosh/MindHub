
landingPage.factory("signupSrv", function ($http) {
    return {
        signUp: function (user)  {
            return $http({
                method: "Post",
                url: "http://mindhubgp1-001-site1.gtempurl.com/api/Signup",
                headers: {
                    'Content-Type': 'application/json' 
                },
                 data: user,
            });    
        }
    }
})