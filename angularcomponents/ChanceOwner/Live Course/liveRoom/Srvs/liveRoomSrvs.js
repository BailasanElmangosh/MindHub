angular.module('chanceOwner-app').factory("liveRoomSrvs", function ($http,$cookies) {
    return {
              
        saveSessionId: function (roomId,sessionId) {
            return $http({
                method: "Get",
                url: "http://mindhubgp-001-site1.itempurl.com/api/saveroomsession/?roomId="+roomId+"&sessionId="+sessionId,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization':' bearer '+ $cookies.get('token')
                }
            })
               }             
               
    }
});