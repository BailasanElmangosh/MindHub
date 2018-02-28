angular.module('student-app').controller("searchResultCtrl",function($scope,searchSrv){

    $scope.keyresult=function(string)
    {   $scope.allResult=true;
        if(string=="")
        {   $scope.filterResult=null;
            $scope.allResult=false;
            return;
        }
        searchSrv.resultSearch(string)
        .success(function(data, status){
            $scope.resultList= data.studentsResult;
           $scope.completeResult(string,$scope.resultList);
          
        });
        $scope.results=$scope.resultList;
          
       
    }
    console.log($scope.results)
    
        
        $scope.completeResult = function(string,array){ 
            console.log($scope.resultList)
             $scope.hidetResult = false; 
             $scope.showResult = true;
             var output = [];
             angular.forEach(array, function(resultDropDown){
                  if(resultDropDown.name.toLowerCase().indexOf(string.toLowerCase()) >= 0)  
                  {  
                       output.push(resultDropDown);  
                  }  
             });  
             
           angular.element('#dropdownResult')
             .css(
                 {   'margin-top':'40px',
                     'max-height':'200px'
                 });
                 
             $scope.filterResult = output;  
        }  
        $scope.fillTextboxResult = function(string,idS){  
             $scope.ResultlDropDown = string;  
             $scope.showResult = true;
             $scope.idResult=idS;
        }  
       
})