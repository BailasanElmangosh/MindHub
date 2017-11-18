(function () {
    landingPage
    .controller("landingPageCtrl", function ($scope, signupSrv,loginSrv,cookies) {
        $scope.userSignUp = {};
        $scope.userLogin = {};
        $scope.errorsLogin = {};
        $scope.errorsSignUp = {};
        $scope.showSpinnerLogin = false;
        $scope.showSpinnerSign = false;
        $scope.showSuccesspop = false;
        // $scope.set=function (token)
        // {
        //    $cookies.put('token', token);
        // };

        // $scope.get=function()
        // {
        //       alert($cookies.get('token')); 
        // };
        // $scope.remove=function()
        // {  $cookies.remove('token');
        // };
        $scope.signUp = function () {
            $scope.showSpinnerSign = true;
            signupSrv.signUp($scope.userSignUp)
                .success(function (data, status) {
                    $scope.showSuccesspop = true;
                    $scope.showSpinnerSign = false;
                    if (data.status =="Success")
                    {                           angular.element(document.querySelector('#close')).click();
                 
                        var signupSuccessPopUp = angular.element(document.querySelector('#popupSeccess'));
                        signupSuccessPopUp.modal('show');
                        angular.element(document.querySelector("#signFrm").reset());
                    }
                    if (data.status == "Failed") {
                        $scope.errorsSignUp = data.errors;
                    }
                });
        };

        $scope.login = function () {
            loginSrv.login($scope.userLogin)
                .success(function (data, status) {
                    if (data.status =="Success")
                    { 
                        cookies.set('token',data.token)
                    }
                    if (data.status == "Failed") 
                    {
                        $scope.errorsLogin = data;
                    }
                });
        };
        
        $scope.token = function () 
            {
                cookies.get('token');
            };
            
    });

})();