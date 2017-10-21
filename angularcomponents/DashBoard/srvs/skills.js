dashBoard.factory("skillsSrv", function ($http) {
    return {
        skillsPost: function (skill) {
            return $http({
                method: "Post",
                url: "http://localhost:8178/api/createskill",
                data: skill,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
         

        },
        skillsGet: function () {
            return $http({
                method: "Get",
                url: "http://localhost:8178/api/allskills",
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }
    }
})