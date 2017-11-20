newsFeedApp.factory('questionsSrv',function($http,$cookies){
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
        }
    }
})