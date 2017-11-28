angular. module("newsFeedApp").factory('questionsSrv',function($http,$cookies){
    return {
        Create : function(question,token){
            return $http({
                method:"Post",
                url:"http://localhost:2449/api/addstudentquestion",
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
                url:"http://localhost:2449/api/addanswer",
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
                url:"http://localhost:2449/api/getquestionsbyid",
                headers:{
                    'Content-Type': 'application/json',
                    'Authorization':' bearer '+token
                },
                data:ids
            })  
        }
    }
})