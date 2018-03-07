angular.module('chanceOwner-app').controller("liveCouresCtrl",function($scope,$cookies,liveCourseSrvs)
{
    liveCourseSrvs.getCatagory()
    .success(function(data, status){
      $scope.getcategory= data.mainCategories;
    });
    liveCourseSrvs.GetsubCategorys()
    .success(function(data, status){
      $scope.getsubCategorys= data.subCategories;
    });
    $scope.createLiveCourse={}
    $scope.create=function()
    {   console.log($scope.createLiveCourse)

        liveCourseSrvs.createliveCourse($scope.createLiveCourse)
    .success(function(data,status){
        if(data.status=="Success")
        {
            alert('success')
        }
    }); 
    }
    //upload Image
    $scope.jquery=function()
               {
                   //    upload image
                //    $('#imgCourseForm').on('submit',(function(e) {
                //        e.preventDefault();
                //        var token = $.cookie("token");
                //        var formData = new FormData(this);
                //        var image;
                //        $.ajax({
                //            type:'POST',
                //            url: 'http://mindhubgp-001-site1.itempurl.com/api/uploadstudentimage',
                //            data:formData,
                //            headers: {"Authorization": "bearer "+token},
                //            cache:false,
                //            contentType: false,
                //            processData: false,
                //            success:function(data){
                //                if(data.status=='Success')
                //                {
                //                    $scope.getNewPath(data.imagePath);
                //                }
                //                else
                //                {  
                //                }
                           
                //            },
                //            error: function(data){
                //            }
                //        });
                //    }));
                    $scope.sizeFalse=function()
                    {  
                        angular.element('#size')
                        .css( 'display','block'); 
                    }
                    $scope.sizeTrue=function()
                    {  
                        angular.element('#size')
                        .css( 'display','none'); 
                    }
                   $("#ImageBrowse").on("change", function() {
                       var file=$(this)[0].files[0]
                       console.log(file.size);
                       if(file.size<=5000000&&file.type=='image/jpeg'||file.type=='image/jpg'||file.type=='image/png')
                       { $scope.createLiveCourse.Image=file;
                        console.log($scope.createLiveCourse.Image)
                         $scope.sizeTrue();  
                       }
                       else
                       {$scope.sizeFalse();
                       }
                   });
               
               } 
                $scope.jquery();
   
});