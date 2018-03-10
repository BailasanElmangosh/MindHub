angular.module("student-app")
.controller("liveRoomCtrl",function($scope,$routeParams,$http){
    alert($routeParams.sessionId);
    $scope.jquery = function(){
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
            webrtc.joinRoom($routeParams.roomId);
        //    var id=webrtc.connection.getSessionid();
        //    console.log(id);
           webrtc.mute();
        });
        
    };
    $scope.jquery();
})
