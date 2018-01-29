dashBoard.factory("skillsSrv", function ($http) {
    return {
        skillsPost: function (skill) {
            return $http({
                method: "Post",
                url: "http://mindhubgp-001-site1.itempurl.comapi/createskill",
                data: skill,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
         

        },
        skillsGet: function () {
            return $http({
                method: "Get",
                url: "http://mindhubgp-001-site1.itempurl.com/api/allskills",
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        },
        deleteSkill: function (id) {
            return $http({
                method: "Get",
                url: "http://mindhubgp-001-site1.itempurl.com/api/deleteskill/?id="+id,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }
    }
})