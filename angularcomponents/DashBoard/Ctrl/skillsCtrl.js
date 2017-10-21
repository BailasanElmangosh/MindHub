(function () {
    dashBoard.controller('skillsCtrl', 
    function($scope,skillsSrv) {
      $scope.skill={};
      $scope.getskill={};
      // Post Skills
      
      $scope.addSkill=function(){
        skillsSrv.skillsPost($scope.skill)
        .success(function(data, status){
             alert(data.status);
             $scope.getskill.push(data.skill)
        });
      };
    //  Get skills
  
  
      skillsSrv.skillsGet()
      .success(function(data, status){
        $scope.getskill= data.skills;

      });
      
      });
})();

