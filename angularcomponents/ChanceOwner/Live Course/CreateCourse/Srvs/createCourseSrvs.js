angular.module('chanceOwner-app').factory("createCourseSrvs", function ($http,$cookies) {
    return {
        getCatagory:function()
        {
            return $http({
                method: "Get",
                url: "http://gpmhhost-001-site1.ftempurl.com/api/allmaincategories",
                headers: {
                    'Content-Type': 'application/json'
                }
            });
         
        },
        GetsubCategorys: function (id) {
            return $http({
                method: "Get",
                url: "http://gpmhhost-001-site1.ftempurl.com//api/subcatsofcat/?id="+id,
                headers: {
                    'Content-Type': 'application/json'
                }
            })
               },
               GetLiveCoures: function () {
                return $http({
                    method: "Get",
                    url: "http://gpmhhost-001-site1.ftempurl.com/api/getmylcourses",
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization':' bearer '+ $cookies.get('token')
                    }
                })
                   }

                       
               
    }
});