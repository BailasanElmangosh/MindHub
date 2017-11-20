dashBoard.factory("subCategorySrv", function ($http) {
    return {
        
        GetsubCategorys: function () {
            return $http({
                method: "Get",
                url: "http://localhost:2449/api/allsubcategories",
                headers: {
                    'Content-Type': 'application/json'
                }
            })
               },
    CreateSubCategory: function (subCategory) {
        return $http({
            method: "Post",
            url: "http://localhost:2449/api/createsubcat",
            data:subCategory ,
            headers: {
                'Content-Type': 'application/json'
            }
        });

     },
     DeleteSubCategory: function (id) {
        return $http({
            method: "Get",
            url: "http://localhost:2449/api/deletesubcategory/?id="+id,
            headers: {
                'Content-Type': 'application/json'
            }
        });

     }

    }
})