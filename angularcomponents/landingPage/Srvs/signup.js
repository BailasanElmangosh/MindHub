
landingPage.factory("signupSrv", function ($http) {
    return {
        signUp: function (user)  {
            return $http({
                method: "Post",
                url: "http://gpmhhost-001-site1.ftempurl.com/api/Signup",
                headers: {
                    'Content-Type': 'application/json' 
                },
                 data: user,
            });    
        }
    }
})