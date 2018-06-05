angular.module('chanceOwner-app').factory("showCourseSrvs", function ($http,$cookies) {
    return {
               GetLiveCoures: function () {
                return $http({
                    method: "Get",
                    url: "http://gpmhhost-001-site1.ftempurl.com/api/getmylcourses",
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization':' bearer '+ $cookies.get('token')
                    }
                })
                   },
                   DeleteLiveCoures: function (id) {
                    return $http({
                        method: "Get",
                        url: "http://gpmhhost-001-site1.ftempurl.com/api/removelcource/?id="+id,
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
                            url: "http://gpmhhost-001-site1.ftempurl.com/api/editlcourse",
                            headers: {
                                'Content-Type': 'application/json',
                                'Authorization':' bearer '+ $cookies.get('token')
                            }
                        })
                           },
                           golive: function (id) {
                            return $http({
                                method: "Get",
                                url: "http://gpmhhost-001-site1.ftempurl.com/api/goliveroom/?id="+id,
                                headers: {
                                    'Content-Type': 'application/json',
                                    'Authorization':' bearer '+ $cookies.get('token')
                                }
                            })
                               }
                            

                       
               
    }
});