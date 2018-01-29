dashBoard.factory("subCategorySrv", function ($http) {
    return {
        
        GetsubCategorys: function () {
            return $http({
                method: "Get",
                url: "http://mindhubgp-001-site1.itempurl.com/api/allsubcategories",
                headers: {
                    'Content-Type': 'application/json'
                }
            })
               },
    CreateSubCategory: function (subCategory) {
        return $http({
            method: "Post",
            url: "http://mindhubgp-001-site1.itempurl.com/api/createsubcat",
            data:subCategory ,
            headers: {
                'Content-Type': 'application/json'
            }
        });

     },
     DeleteSubCategory: function (id) {
        return $http({
            method: "Get",
            url: "http://mindhubgp-001-site1.itempurl.com/api/deletesubcategory/?id="+id,
            headers: {
                'Content-Type': 'application/json'
            }
        });

     }

    }
})