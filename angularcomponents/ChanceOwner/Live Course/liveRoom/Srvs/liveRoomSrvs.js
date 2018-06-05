angular.module('chanceOwner-app').factory("liveRoomSrvs", function ($http,$cookies) {
    return {
              
        saveSessionId: function (roomId,sessionId) {
            return $http({
                method: "Get",
                url: "http://gpmhhost-001-site1.ftempurl.com/api/saveroomsession/?roomId="+roomId+"&sessionId="+sessionId,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization':' bearer '+ $cookies.get('token')
                }
            })
               }             
               
    }
});