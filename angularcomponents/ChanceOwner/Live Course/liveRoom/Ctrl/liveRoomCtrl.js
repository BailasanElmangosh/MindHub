
angular.module('chanceOwner-app').controller("liveRoomCtrl",function($scope,$cookies,liveRoomSrvs,$routeParams)
{  $scope.textMsg
    var room
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
     room=$routeParams.roomId
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
         console.log($scope.textMsg)
        $(function(){
            hub.server.sendMessageToRoom(room, "Instructor", $scope.textMsg);
            
        });
     }
     $scope.messages=[];
     $scope.signalRJquery=function()
     {
        $(function () {
            hub = $.connection.mainHub;
            $.connection.hub.url = 'http://localhost:5415//signalr/hubs';

            hub.client.addNewMessage = function (sender,msg) {
                console.log( sender +" : " + msg);
                $scope.messages.unshift(msg);
            }
        
            $.connection.hub.start().done(function () {
                hub.server.joinRoomGroupChat("grp");
            });
        });
   

     }
    $scope.signalRJquery();
});