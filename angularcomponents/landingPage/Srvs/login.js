﻿landingPage.factory("loginSrv", function ($http) {
    return {
        login: function (user) {
            return $http({
                method: "Post",
                url: "http://localhost:2449/api/Login",
                data: user,
                headers: 
                {
                     'Content-Type': 'application/json'
                }
            })
        }
    }
})