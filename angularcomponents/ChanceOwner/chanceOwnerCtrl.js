
    angular.module('chanceOwner-app').controller("chanceOwnerCtrl",function($scope,$cookies){
        $scope.hideDropDown=true;
        $scope.showDropDown=function()
        {
          $scope.hideDropDown=!$scope.hideDropDown;
        }
        $scope.logout=function()
        {
          $cookies.remove('token');
          window.location ="/index.html";
          console.log('logout')
        }

    });
