angular.module("student-app").factory('questionsSrv',function($http,$cookies){
    return {
        Create : function(question,token){
            return $http({
                method:"Post",
                url:"http://gpmhhost-001-site1.ftempurl.com/api/addstudentquestion",
                headers:{
                    'Content-Type': 'application/json',
                    'Authorization':' bearer '+token
                },
                data:question
            })
        },
        CreateAnswer : function(answer,token){
            return $http({
                method:"Post",
                url:"http://gpmhhost-001-site1.ftempurl.com/api/addanswer",
                headers:{
                    'Content-Type': 'application/json',
                    'Authorization':' bearer '+token
                },
                data:answer
            })
        },
        GetQuestionsByIds : function(ids,token){
            return $http({
                method:"Post",
                url:"http://gpmhhost-001-site1.ftempurl.com/api/getquestionsbyid",
                headers:{
                    'Content-Type': 'application/json',
                    'Authorization':' bearer '+token
                },
                data:ids
            })  
        }
    }
})