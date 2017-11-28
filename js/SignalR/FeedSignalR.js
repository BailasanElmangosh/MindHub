

var mainHub = $.connection.mainHub;
$.connection.hub.url = 'http://localhost:10724/signalr/hubs';

//data in url .
$.connection.hub.qs = { "userId": $.cookie('socketid')};

var counter = 0;
var questionsIds = new Array();
mainHub.client.newQuestion = function(data){
    if(counter ==5){
        //Bind To AngularJs To Call Api And Get Questions.
        angular.element($("#jquery")).scope().newQuestionsSignalR(questionsIds);
        counter=0;
        questionsIds =[];
    }
    else{
        questionsIds.push(data);
        counter++;
        console.log(questionsIds);
    }

}

$.connection.hub.start()
.done(function(){  
    
});
