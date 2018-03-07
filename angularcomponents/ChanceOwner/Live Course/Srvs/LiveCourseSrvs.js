angular.module('chanceOwner-app').factory("liveCourseSrvs", function ($http,$cookies) {
    return {
        getCatagory:function()
        {
            return $http({
                method: "Get",
                url: "http://mindhubgp-001-site1.itempurl.com/api/allmaincategories",
                headers: {
                    'Content-Type': 'application/json'
                }
            });
         
        },
        GetsubCategorys: function () {
            return $http({
                method: "Get",
                url: "http://mindhubgp-001-site1.itempurl.com/api/allsubcategories",
                headers: {
                    'Content-Type': 'application/json'
                }
            })
               }
            //    createliveCourse: function (data) {
            //     return $http({
            //         method: "Post",
            //         url: "http://mindhubgp-001-site1.itempurl.com/api/createlcourse",
            //         data:data,
            //         headers: {
            //             'Content-Type': 'application/json',
            //             'Authorization':' bearer '+ $cookies.get('token')
            //         }
            //     })
            //        }
               
    }
});