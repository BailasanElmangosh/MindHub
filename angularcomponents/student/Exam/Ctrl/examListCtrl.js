angular.module('student-app').controller("examListCtrl", function ($scope,examListSrv,$routeParams) {
    examListSrv.getAllExam().success(function(data,status){
      if(data.status=="Success")
      {
          $scope.allExam=data.exams
        console.log(data.exams)
      }
    })
});