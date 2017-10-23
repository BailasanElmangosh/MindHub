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

      });

//Garabt A3ml Add bl object da nfe3 wa asht3'al 
      // $scope.subCategory={
      //   Name:"C#",
      //   MainCategoryId:1
      // }

      // Wa ba3d kda 3mltlo comment wa garabt mn l html 3ady a7ot l value  am asht3'al 3ady 



      // Add Sub Category 
      
      $scope.addSubCategory=function(){
        subCategorySrv.CreateSubCategory($scope.subCategory)
        .success(function(data, status){
            console.log(data)
             $scope.getsubCategorys.push(data.subCategory)
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

