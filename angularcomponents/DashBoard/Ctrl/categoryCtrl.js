(function () {
    dashBoard.controller('categorysCtrl', 
    function($scope,categorysSrv) {
      $scope.category={};
      $scope.getcategory={};
      // Add Categorys
      
      $scope.addCategory=function(){
        categorysSrv.categorysPost($scope.category)
        .success(function(data, status){
            //  alert(data.status);
             $scope.getcategory.push(data.mainCategories);
             $scope.category.Name = null;
             
        });
      };
    //  Get ALL Categorys
  
    categorysSrv.categorysGet()
      .success(function(data, status){
        $scope.getcategory= data.mainCategories;

      });
       // delete Category
       $scope.delcategory={}
       $scope.remove = function(array, index){
        array.splice($scope.getcategory.indexOf(index), 1);
        }
       $scope.delete=function(array, index,id){
        $scope.remove(array, index);
        categorysSrv.deleteCategory(id)
        .success(function(data, status){
            //  alert(data.status);
        });
                
              };
       
      });
     
})();

