

var mainHub = $.connection.mainHub;
$.connection.hub.url = 'http://localhost:10724/signalr/hubs';

$.connection.hub.qs = { "userId": "3a48b3f6-00ba-493c-b328-9a4a8ab275c2"};

mainHub.client.test = function(data){alert(data);}

mainHub.client.newQuestion = function(data){
    alert("SignalR Event");
    console.log(data);
}

$.connection.hub.start()
.done(function(){  });
