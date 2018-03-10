angular.module('chanceOwner-app').controller("showCouresCtrl",function($scope,$cookies,showCourseSrvs,$routeParams)
{ 
    //api get courses
    $scope.getLiveCoures;
    showCourseSrvs.GetLiveCoures()
    .success(function(data,status){
        if(data.status=="Success")
        {
             $scope.getLiveCoures=data.courses;
        }
    });  
    //get id from course and send to edit dropdwon

    $scope.sendId=function(idC)
    {  console.log(idC);
       for(var i=0;i<=$scope.getLiveCoures.length;i++)
        {   console.log($scope.getLiveCoures[i].id)
            if(idC=$scope.getLiveCoures[i].id)
            {
                $scope.fillData=$scope.getLiveCoures[i];
                console.log($scope.fillData);
                $scope.editData=$scope.fillData;
              $scope.apply();
            }

        } 
    }
    
    //api delete course
    $scope.delLiveCourse=function(id)
    { 
        $scope.id=id
        showCourseSrvs.DeleteLiveCoures($scope.id)
        .success(function(data,status){
           
        }); 
    } 
    // api edit Course
    $scope.EditLiveCoures=function()
    {     
        showCourseSrvs.EditLiveCoures($scope.editData)
     .success(function(data,status){
            if(data.status="Success")
            {
                alert('done');
            }
            else
            {
                alert('error')
            }
     }); 
    }
    //api go live
    $scope.goLive=function(id)
    {
        showCourseSrvs.golive(id)
        .success(function(data,success){
            if(data.status=="Success")
            {
                console.log("done");
                window.location="chanceOwner.html#/liveRoom/"+data.roomId;
            }
            else
            {
                console.log("error");
            }
        });
    }
    alert($routeParams.roomId)
   
});