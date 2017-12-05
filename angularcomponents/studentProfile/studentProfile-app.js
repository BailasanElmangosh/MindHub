'use strict';
var studentProfile=angular.module('studentProfile',['ngMessages','ngCookies','newsFeedApp']);
studentProfile.filter('formatDate', function($filter) {
    alert('hii');
    return function (myDate) {
      if(typeof myDate === 'undefined') {
        return myDate;
      }
      var dateTokens = myDate.split("/");
      var month = parseInt(dateTokens[0]) - 1;
      var day = parseInt(dateTokens[1]);
      var year = parseInt(dateTokens[2]);
      var jsDate = new Date(year, month, day, 0, 0, 0, 0);
      
      return $filter('date')(jsDate.getTime(), 'fullDate');
    };
  });
  