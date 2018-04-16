dashBoard.factory("subCategorySrv", function ($http) {
    return {
        
        GetsubCategorys: function () {
            return $http({
                method: "Get",
                url: "http://mindhubgp1-001-site1.gtempurl.com/api/allsubcategories",
                headers: {
                    'Content-Type': 'application/json'
                }
            })
               },
    CreateSubCategory: function (subCategory) {
        return $http({
            method: "Post",
            url: "http://mindhubgp1-001-site1.gtempurl.com/api/createsubcat",
            data:subCategory ,
            headers: {
                'Content-Type': 'application/json'
            }
        });

     },
     DeleteSubCategory: function (id) {
        return $http({
            method: "Get",
            url: "http://mindhubgp1-001-site1.gtempurl.com/api/deletesubcategory/?id="+id,
            headers: {
                'Content-Type': 'application/json'
            }
        });

     }

    }
})