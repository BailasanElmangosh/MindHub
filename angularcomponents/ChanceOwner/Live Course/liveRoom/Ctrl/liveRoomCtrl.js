
angular.module('chanceOwner-app').controller("liveRoomCtrl",function($scope,$cookies,liveRoomSrvs,$routeParams)
{ 
    $scope.jquery=function()
    {
        var webrtc = new SimpleWebRTC({
            // the id/element dom element that will hold "our" video
            localVideoEl: 'localVideo',
            // the id/element dom element that will hold remote videos
            remoteVideosEl: 'remoteVideos',
            // immediately ask for camera access
            autoRequestMedia: true
        });
        webrtc.on('readyToCall', function () {
            // you can name it anything
            webrtc.joinRoom($scope.roomId);
            var id=webrtc.connection.getSessionid();
            console.log(webrtc.connection.getSessionid())
            webrtc.mute();
            $scope.saveSession($scope.roomId,id);
        });
    }
    $scope.jquery();
     $scope.roomId=$routeParams.roomId;
    //  alert($scope.roomId);
     $scope.saveSession=function(sessionId,roomId)
     {
        liveRoomSrvs.saveSessionId(sessionId,roomId)
        .success(function(data,status){
           if(data.status=="Success")
           {
               console.log("done")
           }
           else
           {
               console.log("error")
           }
        });

     }
     
     angular.element('#scrollComment')
     .css(
         {
             'margin': '0 auto',
             'overflow-y':'scroll',
             'overflow-x':'hidden',
             'position': 'relative',
             ' .scrollComment::-webkit-scrollbar-track': '{ " -webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.3)","background-color": "#8ccb75"}',
             ' .scrollComment::-webkit-scrollbar': '{ "width": "10px","background-color": "#F5F5F5"}',
             ' .scrollComment::-webkit-scrollbar-thumb': '{ "border": " 2px solid #555555","background-color": "#555555"}'
         }
     );

   
     var hub;
     $scope.sendMessage = function(){
        $(function(){
            hub.server.sendMessageToRoom("grp", "sender", "msg msg");
            alert("sent")
        });
     }
     $scope.signalRJquery=function()
     {
        $(function () {
            hub = $.connection.mainHub;
            $.connection.hub.url = 'http://localhost:10724/signalr/hubs';
            hub.client.addNewMessage = function (sender,msg) {
                console.log(sender +" : " + msg);
            }
            $.connection.hub.start().done(function () {
                hub.server.joinRoomGroupChat("grp");
            });
        });
   

     }
    $scope.signalRJquery();
});