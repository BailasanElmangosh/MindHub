dashBoard.factory("categorysSrv", function ($http) {
    return {
        categorysPost: function (category) {
            return $http({
                method: "Post",
                url: "http://gpmhhost-001-site1.ftempurl.com/api/createmaincategory",
                data: category,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
         

        },
        categorysGet: function () {
            return $http({
                method: "Get",
                url: "http://gpmhhost-001-site1.ftempurl.com/api/allmaincategories",
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        },
        deleteCategory: function (id) {
            return $http({
                method: "Get",
                url: "http://gpmhhost-001-site1.ftempurl.com/api/deletemaincategories/?id="+id,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }
    }
})