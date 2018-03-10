
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
        });
    }
    $scope.jquery();
     $scope.roomId=$routeParams.roomId;
     alert($scope.roomId);
   
});