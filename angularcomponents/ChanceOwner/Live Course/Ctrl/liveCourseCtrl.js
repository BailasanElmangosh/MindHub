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
    $(document).ready(function(){ $("#createFrm").on('submit',function(e){ alert("frm"); e.preventDefault(); var formData = new FormData(this); console.log(formData); var token = $.cookie("token"); $.ajax({ type:'POST', datatype:"Json", url: 'http://mindhubgp-001-site1.itempurl.com/api/createlcourse', data:formData, headers: {"Authorization": "bearer "+token}, cache:false, contentType: false, processData: false, success:function(){ alert("DONE"); }, error:function(){ alert("ERROR") } }) }) });
                //    //    upload image
                //    $('#createFrm').on('submit',(function(e) {
                //        e.preventDefault();
                //        var token = $.cookie("token");

                //        var formData = new FormData(this);
                //        console.log(token)
                   
                //     $.ajax({
                //         type:'POST',
                //         datatype:"Json",
                //         url: 'http://mindhubgp-001-site1.itempurl.com/api/createlcourse',
                //         data:formData,
                //         headers: {"Authorization": "bearer "+token},
                //         cache:false,
                //         contentType: false,
                //         processData: false,
                //         success:function(data){
                //             if(data.status=='Success')
                //             {
                //                 alert('hii');
                //             }
                //             else
                //             {  
                //             }
                //         },
                //         error: function(data){
                //         }
                //     });
                      
                //    }));
                    //    var file=$(this)[0].files[0]
                    //     if(file.size<=5000000&&file.type=='image/jpeg'||file.type=='image/jpg'||file.type=='image/png')
                    //     { 
                    //         $scope.sizeTrue();  
                    //         var image;
                           
                    //     }
                    //     else
                    //     {$scope.sizeFalse();
                    //     }
                    // $scope.sizeFalse=function()
                    // {  
                    //     angular.element('#size')
                    //     .css( 'display','block'); 
                    // }
                    // $scope.sizeTrue=function()
                    // {  
                    //     angular.element('#size')
                    //     .css( 'display','none'); 
                    // }
               
             
   
});