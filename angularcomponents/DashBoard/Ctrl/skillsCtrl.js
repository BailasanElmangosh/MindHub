(function () {
    dashBoard.controller('skillsCtrl', 
    function($scope,skillsSrv) {
      $scope.skill={};
      $scope.getskill={};
      // Add Skills
      
      $scope.addSkill=function(){
        skillsSrv.skillsPost($scope.skill)
        .success(function(data, status){
             alert(data.status);
             $scope.getskill.push(data.skill)
             $scope.skill.Name = null;
        });
      };
    //  Get ALL skills
  
      skillsSrv.skillsGet()
      .success(function(data, status){
        $scope.getskill= data.skills;

      });
       // delete skill
       $scope.delskill={}
       $scope.remove = function(array, index){
        array.splice(index, 1);
        }
       $scope.delete=function(array, index ,id){
        $scope.remove(array, index);
        skillsSrv.deleteSkill( id)
        .success(function(data, status){
             alert(data.status);
        });
                
              };
       
      });
     
})();

