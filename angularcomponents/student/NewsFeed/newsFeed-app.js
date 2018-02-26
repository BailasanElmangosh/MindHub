
    newsFeedApp=angular.module('student-app',['ngCookies']);
    newsFeedApp.filter('formatDate', function($filter) {
        // alert('hii');
        return function (myDate) {
          if(typeof myDate === 'undefined') {
            return myDate;
          }
          
          var date = myDate;
          var dateNow = Date.now(); 
         
          var min =60*1000; 
          var hour= 60*60*1000;  
          var day = 24*60*60*1000;
          var month =30*24*60*60*1000;  
                      
          var firstDate = new Date(date);
          var secondDate = new Date(dateNow);
    
          var Min = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(min)));
          var Hours = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(hour))); 
          var Days = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(day)));
          var Months = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(month)));  
          if(Min<=59)
          {
            return Min+' Min ago'
          } 
          if(Hours<=23)
          {
            return Hours+' Hours ago'
          }   
          else
          {   if(Days<=29)
            {
              return Days+' Days ago'
            }
            return Months+' Months ago'
          }
        };
      });
      
