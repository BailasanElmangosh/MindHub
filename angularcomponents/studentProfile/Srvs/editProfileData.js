studentProfile.factory("profileEditSrv", function ($http,$cookies) {
    return {
            editData: function (data) {
            return $http({
                method: "Post",
                url: "http://localhost:2449/api/editstudentprofile",
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
                    url: "http://localhost:2449/api/allskills",
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
            },
            addSkill: function(skill)
            { 
                return $http({
                    method:'Post',
                    url:"http://localhost:2449/api/addstudentskill",
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
                    url: "http://localhost:2449/api/deletestudentskill",
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
                    url: "http://localhost:2449/api/uploadstudentimage",
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
                    url: "http://localhost:2449/api/addstudentquestion",
                    data:data,
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization':' bearer '+ $cookies.get('token'),
                    }
                });
            }   
            

    }
})