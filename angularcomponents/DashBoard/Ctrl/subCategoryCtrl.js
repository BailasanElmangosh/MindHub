(function () {
    dashBoard.controller('subCategoryCtrl', 
    function($scope,subCategorySrv,categorysSrv) {
        $scope.test={Name:"bailasan",MainCategoryId:15};
//Get Category
      $scope.getCategory={};
      $scope.filterCondition = "hi";
      categorysSrv.categorysGet()
      .success(function(data, status){
        $scope.getcategory= data.mainCategories;

      });

      $scope.subCategory={}
   $scope.getsubCategorys={}

      // Add Sub Category 
      
      $scope.addSubCategory=function(){

        subCategorySrv.CreateSubCategory($scope.subCategory)
        .success(function(data, status){
             alert(data.status);
             $scope.getsubCategorys.push(data.test)
             $scope.subCategory.Name = null;
        });
      };
    // //  Get ALL Sub Category 
  
    subCategorySrv.GetsubCategorys()
      .success(function(data, status){
          
        $scope.getsubCategorys= data.subCategories;

      });




    //    // delete skill
    //    $scope.delskill={}
    //    $scope.remove = function(array, index){
    //     array.splice(index, 1);
    //     }
    //    $scope.delete=function(array, index ,id){
    //     $scope.remove(array, index);
    //     skillsSrv.deleteSkill( id)
    //     .success(function(data, status){
    //          alert(data.status);
    //     });
                
    //           };
       
      });
     
})();

