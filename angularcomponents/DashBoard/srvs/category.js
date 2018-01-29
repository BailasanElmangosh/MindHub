dashBoard.factory("categorysSrv", function ($http) {
    return {
        categorysPost: function (category) {
            return $http({
                method: "Post",
                url: "http://mindhubgp-001-site1.itempurl.com/api/createmaincategory",
                data: category,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
         

        },
        categorysGet: function () {
            return $http({
                method: "Get",
                url: "http://mindhubgp-001-site1.itempurl.com/api/allmaincategories",
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        },
        deleteCategory: function (id) {
            return $http({
                method: "Get",
                url: "http://mindhubgp-001-site1.itempurl.com/api/deletemaincategories/?id="+id,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }
    }
})