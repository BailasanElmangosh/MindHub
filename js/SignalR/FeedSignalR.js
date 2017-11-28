

var mainHub = $.connection.mainHub;
$.connection.hub.url = 'http://localhost:10724/signalr/hubs';

$.connection.hub.qs = { "userId": $.cookie('socketid')};

mainHub.client.newQuestion = function(data){
    alert("SignalR Event");
    console.log(data);
}

$.connection.hub.start()
.done(function(){  });
