angular. module("newsFeedApp").factory('questionsSrv',function($http,$cookies){
    return {
        Create : function(question,token){
            return $http({
                method:"Post",
                url:"http://mindhubgp-001-site1.itempurl.com/api/addstudentquestion",
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
                url:"http://mindhubgp-001-site1.itempurl.com/api/addanswer",
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
                url:"http://mindhubgp-001-site1.itempurl.com/api/getquestionsbyid",
                headers:{
                    'Content-Type': 'application/json',
                    'Authorization':' bearer '+token
                },
                data:ids
            })  
        }
    }
})