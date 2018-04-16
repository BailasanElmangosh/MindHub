angular.module("student-app")
.controller("liveRoomCtrl",function($scope,$routeParams,$http){
    console.log($routeParams.sessionId);
    var room;
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
            room=$routeParams.roomId
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
            // alert('#'+$routeParams.sessionId+'_video_incoming')
            $scope.signalRJquery();
        },5000);
           
        });

       
    };
    $scope.jquery();
       
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
           hub.server.sendMessageToRoom($routeParams.roomId, "Student",$scope.textMsg);
           $scope.textMsg=""
       });
    }
    $scope.messages=[];
    $scope.signalRJquery=function()
    {
        $(function () {

           hub = $.connection.mainHub;
           $.connection.hub.url = 'http://localhost:10724/signalr/hubs';

            hub.client.addNewMessage = function (sender, msg) {
                $scope.newMsg = {
                    msg: msg,
                    sender: sender
                };
                $scope.messages.push($scope.newMsg);
                console.log($scope.messages);
                $scope.$apply();
            };

           $.connection.hub.start().done(function () {
             hub.server.joinRoomGroupChat($routeParams.roomId);
            });
       });
           
       

       
    }


})
