

angular.module('student-app').factory("examListSrv", function ($http,$cookies) {
    return {
           getAllExam: function () {
            return $http({
                method: "Get",
<<<<<<< HEAD
                url: "http://gpmhhost-001-site1.ftempurl.com/api/getstudentexam/?id=1",
=======
                url: "http://mindhubgp1-001-site1.gtempurl.com/api/allstudentexams",
>>>>>>> 83353b811fbc56228e79232b73641ff423348664
                headers: 
                {   'Content-Type': 'application/json',
                    'Authorization':' bearer '+ $cookies.get('token')
                }
            })
        }
    }
})