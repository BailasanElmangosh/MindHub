angular.module("student-app")
.controller("liveRoomCtrl",function($scope,$routeParams,$http){
    console.log($routeParams.sessionId);
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
        // $('#remoteVideos').add( "video" ).css( 'display', 'block !important');
        $(document).ready(function(){
        // $("#remoteVideos").on("append", function() { alert('Hello, world!'); });
        setTimeout(function(){

            $('#'+$routeParams.sessionId+'_video_incoming').css('display', 'block !important');
            alert('#'+$routeParams.sessionId+'_video_incoming')
        },10000);
           
        });
        // setTimeout(function(){
        //     angular.element('#'+$routeParams.sessionId+'_video_incoming')
        //     .css(
        //         {    'display': 'block !important'
        //         });
        //         angular.element('body')
        //         .css(
        //             {
        //                'background-color':'#f0f'
        //             }
        //            );
        //         console.log('#'+$routeParams.sessionId+'_video_incoming');
        // },5000)
            
       
    };
    $scope.jquery();
})
