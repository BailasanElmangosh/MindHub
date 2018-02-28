angular.module('student-app').factory("profileEditSrv", function ($http,$cookies) {
    return {
            editData: function (data) {
            return $http({
                method: "Post",
                url: "http://mindhubgp-001-site1.itempurl.com/api/editstudentprofile",
                data:data,
                headers: 
                {   'Content-Type': 'application/json',
                    'Authorization':' bearer '+ $cookies.get('token')
                }
            })
            },
            skillsGet: function () {
                return $http({
                    method: "Get",
                    url: "http://mindhubgp-001-site1.itempurl.com/api/allskills",
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
            },
            addSkill: function(skill)
            { 
                return $http({
                    method:'Post',
                    url:"http://mindhubgp-001-site1.itempurl.com/api/addstudentskill",
                    data:skill,
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization':' bearer '+ $cookies.get('token'),
                      
                    }
                });

            },
            deleteSkill: function (data) {
                return $http({
                    method: "Post",
                    url: "http://mindhubgp-001-site1.itempurl.com/api/deletestudentskill",
                    data:data,
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization':' bearer '+ $cookies.get('token'),
                    }
                });
            },
            uploadImage: function (data) {
                return $http({
                    method: "Post",
                    url: "http://mindhubgp-001-site1.itempurl.com/api/uploadstudentimage",
                    data:data,
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'Authorization':' bearer '+ $cookies.get('token'),
                    }
                });
            },
            addQues: function (data) {
                return $http({
                    method: "Post",
                    url: "http://mindhubgp-001-site1.itempurl.com/api/addstudentquestion",
                    data:data,
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization':' bearer '+ $cookies.get('token'),
                    }
                });
            } ,
             
            likedislike: function (data) {
                return $http({
                    method: "Post",
                    url: "http://mindhubgp-001-site1.itempurl.com/api/likedislikequestion",
                    data:data,
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization':' bearer '+ $cookies.get('token'),
                    }
                });
            } ,
            unfollow:function(id)
            { 
                return $http({
                    method: "Get",
                    url: "http://mindhubgp-001-site1.itempurl.com/api/unfollowfriend/?id="+id,
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization':' bearer '+ $cookies.get('token'),
                    }
                });
            }
           

    }
})