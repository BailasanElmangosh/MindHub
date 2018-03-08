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
        GetsubCategorys: function (id) {
            return $http({
                method: "Get",
                url: "http://mindhubgp-001-site1.itempurl.com//api/subcatsofcat/?id="+id,
                headers: {
                    'Content-Type': 'application/json'
                }
            })
               },
               GetLiveCoures: function () {
                return $http({
                    method: "Get",
                    url: "http://mindhubgp-001-site1.itempurl.com/api/getmylcourses",
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization':' bearer '+ $cookies.get('token')
                    }
                })
                   },
                   DeleteLiveCoures: function (id) {
                    return $http({
                        method: "Get",
                        url: "http://mindhubgp-001-site1.itempurl.com/api/removelcource/?id="+id,
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization':' bearer '+ $cookies.get('token')
                        }
                    })
                       },
                       EditLiveCoures: function (data) {
                        return $http({
                            method: "Post",
                            data:data,
                            url: "http://mindhubgp-001-site1.itempurl.com/api/editlcourse",
                            headers: {
                                'Content-Type': 'application/json',
                                'Authorization':' bearer '+ $cookies.get('token')
                            }
                        })
                           },

                       
               
    }
});