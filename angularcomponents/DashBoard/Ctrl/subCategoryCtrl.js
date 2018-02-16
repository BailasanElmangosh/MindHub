(function () {
    dashBoard.controller('subCategoryCtrl', 
    function($scope,subCategorySrv,categorysSrv) {
   
//Get Category

      $scope.filterCondition = "hi";
      //Ana mas7at l adima wa 3mltha tany ba nafs l tary2a asht3'let 3'yart esm l object bs
      // wa fa ng-repeat 5leto c ma3rfsh ezay asht3'al :D 
      $scope.MainCategories={};
      categorysSrv.categorysGet()
      .success(function(data, status){
        $scope.MainCategories= data.mainCategories;
      //  $scope.subCategory.name = null;
      });




      // Add Sub Category 
      $scope.subCategory ={}
      $scope.addSubCategory=function(){
      subCategorySrv.CreateSubCategory($scope.subCategory)
        .success(function(data, status){
             $scope.getsubCategorys.push(data.subCategory)
        });
      };
    // //  Get ALL Sub Category 
  
    subCategorySrv.GetsubCategorys()
      .success(function(data, status){
        $scope.getsubCategorys= data.subCategories;
      });
      // delete skill
      $scope.delskill={}
      $scope.remove = function(array, index){
       array.splice($scope.getsubCategorys.indexOf(index), 1);
       }
      $scope.delete=function(array, index ,id){
       $scope.remove(array, index);
       subCategorySrv.DeleteSubCategory( id)
       .success(function(data, status){
           //  alert(data.status);
       });

       
      });
     
})();

