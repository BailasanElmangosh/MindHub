angular.module('chanceOwner-app').controller("createCouresCtrl",function($scope,$cookies,createCourseSrvs)
{ 
    createCourseSrvs.getCatagory()
    .success(function(data, status){
      $scope.getcategory= data.mainCategories;
    });
        
        $scope.test=function(id)
        {   $scope.data=id;
            createCourseSrvs.GetsubCategorys($scope.data.id)
            .success(function(data, status){
                if(data.status=="Success")
                {
                   $scope.getsubCategorys= data.subCategories;
                }
                else
                {
                }
          
            });
        }
    $scope.createLiveCourse={}
    $scope.create=function()
    { 
        createCourseSrvs.createliveCourse($scope.createLiveCourse)
    .success(function(data,status){
        if(data.status=="Success")
        {
            
        }
    }); 
    }
    $(document).ready(function(){
        $("#createFrm").on('submit',function(e){
            e.preventDefault();
            var formData = new FormData(this);
            var token = $cookie("token");
            $.ajax({
                type:'POST',
                datatype:"Json",
                url: 'http://gpmhhost-001-site1.ftempurl.com/api/createlcourse',
                data:formData,
                headers: {"Authorization": "bearer "+token},
                cache:false,
                contentType: false,
                processData: false,
                success:function(){
                    window.location ="/chanceOwner.html#/liveCourse";
                    
                },
                error:function(){
                    console.log(data);
                   
                }
            })
        })
    });

});