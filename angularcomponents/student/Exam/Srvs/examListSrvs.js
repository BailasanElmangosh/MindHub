

angular.module('student-app').factory("examListSrv", function ($http,$cookies) {
    return {
           getAllExam: function () {
            return $http({
                method: "Get",
                url: "http://mindhubgp1-001-site1.gtempurl.com/api/allstudentexams",
                headers: 
                {   'Content-Type': 'application/json',
                    'Authorization':' bearer '+ $cookies.get('token')
                }
            })
        }
    }
})