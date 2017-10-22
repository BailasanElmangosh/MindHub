dashBoard.factory("categorysSrv", function ($http) {
    return {
        categorysPost: function (category) {
            return $http({
                method: "Post",
                url: "http://localhost:8178/api/createmaincategory",
                data: category,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
         

        },
        categorysGet: function () {
            return $http({
                method: "Get",
                url: "http://localhost:8178/api/allmaincategories",
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        },
        deleteCategory: function (id) {
            return $http({
                method: "Get",
                url: "http://localhost:8178/api/deletemaincategories/?id="+id,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }
    }
})