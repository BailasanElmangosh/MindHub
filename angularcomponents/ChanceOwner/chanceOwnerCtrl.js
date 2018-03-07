
    angular.module('chanceOwner-app').controller("chanceOwnerCtrl",function($scope){
        $scope.hideDropDown=true;
        $scope.showDropDown=function()
        {
          $scope.hideDropDown=!$scope.hideDropDown;
        }

    });
