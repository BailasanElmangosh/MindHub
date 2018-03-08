angular.module('chanceOwner-app').controller("liveCouresCtrl",function($scope,$cookies,liveCourseSrvs)
{
    liveCourseSrvs.getCatagory()
    .success(function(data, status){
      $scope.getcategory= data.mainCategories;
    });
        
        $scope.test=function(id)
        {$scope.data=id;
            console.log($scope.data.id)
            liveCourseSrvs.GetsubCategorys($scope.data.id)
            .success(function(data, status){
                if(data.status=="Success")
                {
                         alert('hii')
                   $scope.getsubCategorys= data.subCategories;
                   console.log($scope.getsubCategorys)
                }
                else
                {
                    alert('error')
                }
          
            });
        }
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
<<<<<<< HEAD
    $(document).ready(function(){
        $("#createFrm").on('submit',function(e){
            alert("frm");
            e.preventDefault();
            var formData = new FormData(this);
            console.log(formData);
            var token = $.cookie("token");
            $.ajax({
                type:'POST',
                datatype:"Json",
                url: 'http://mindhubgp-001-site1.itempurl.com/api/createlcourse',
                data:formData,
                headers: {"Authorization": "bearer "+token},
                cache:false,
                contentType: false,
                processData: false,
                success:function(){
                    window.location ="/chanceOwner.html#/liveCourse";
                },
                error:function(){
                    alert("ERROR")
                }
            })
        })
    });

    // upload image
    
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
    
    liveCourseSrvs.GetLiveCoures()
    .success(function(data,status){
        if(data.status=="Success")
        {
             $scope.getLiveCoures=data.courses;
        }
    });  
    $scope.sendId=function(id)
    {  console.log(id);
       for(var i=0;i<=$scope.getLiveCoures.length;i++)
        {   console.log($scope.getLiveCoures[i].id)
            if(id=$scope.getLiveCoures[i].id)
            {
                $scope.fillData=$scope.getLiveCoures[i];
                console.log($scope.fillData);
                $scope.editData.id=$scope.fillData.id;
            }

        } 
    }
    
    $scope.getLiveCoures
    $scope.delLiveCourse=function(id)
    { 
        $scope.id=id
        liveCourseSrvs.DeleteLiveCoures($scope.id)
        .success(function(data,status){
           
        }); 
    } 
    $scope.editData;
    $scope.EditLiveCoures=function()
    { 
        liveCourseSrvs.EditLiveCoures(editData)
     .success(function(data,status){
=======

    $scope.jquery = function(){
        $(document).ready(function(){
            $("#createFrm").on('submit',function(e){
                alert("frm");
                e.preventDefault();
                var formData = new FormData(this);
                console.log(formData);
                var token = $.cookie("token");
                $.ajax({
                    type:'POST',
                    datatype:"Json",
                    url: 'http://mindhubgp-001-site1.itempurl.com/api/createlcourse',
                    data:formData,
                    headers: {"Authorization": "bearer "+token},
                    cache:false,
                    contentType: false,
                    processData: false,
                    success:function(){
                        alert("DONE");
                    },
                    error:function(){
                        alert("ERROR")
                    }
                })
            })
        });
    }

    $scope.jquery();
    // $(document).ready(function(){ $("#createFrm").on('submit',function(e){ alert("frm"); e.preventDefault(); var formData = new FormData(this); console.log(formData); var token = $.cookie("token"); $.ajax({ type:'POST', datatype:"Json", url: 'http://mindhubgp-001-site1.itempurl.com/api/createlcourse', data:formData, headers: {"Authorization": "bearer "+token}, cache:false, contentType: false, processData: false, success:function(){ alert("DONE"); }, error:function(){ alert("ERROR") } }) }) });
                //    //    upload image
                //    $('#createFrm').on('submit',(function(e) {
                //        e.preventDefault();
                //        var token = $.cookie("token");
>>>>>>> 8bc1d912568afb8a977ba38df7cd187ac0a15e88

     }); 
    }
    
   
});