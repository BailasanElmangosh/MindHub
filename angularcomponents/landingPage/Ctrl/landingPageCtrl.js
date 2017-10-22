(function () {
    landingPage.controller("landingPageCtrl", function ($scope, signupSrv,$http,loginSrv) {
        $scope.userSignUp = {};
        $scope.userLogin = {};
        $scope.errorsLogin = {};
        $scope.errorsSignUp = {};
        $scope.showSpinnerLogin = false;
        $scope.showSpinnerSign = false;
        $scope.showSuccesspop = false;
        $scope.signUp = function () {
            $scope.showSpinnerSign = true;
            signupSrv.signUp($scope.userSignUp)
                .success(function (data, status) {
                    $scope.showSuccesspop = true;
                    $scope.showSpinnerSign = false;
                    if (data.status =="Success")
                    {
                        var signupSuccessPopUp = angular.element(document.querySelector('#popupSeccess'));
                        signupSuccessPopUp.modal('show');
                    }
                    if (data.status == "Failed") {
                        $scope.errorsSignUp = data.errors;
                    }
                });
        };

        $scope.login = function () {
            $scope.showSpinnerLogin = true;
            alert("Working");
            loginSrv.login($scope.userLogin)
                .success(function (data, status) {
                    $scope.showSpinnerLogin = false;
                    //alert(status);
                    //alert(data.status);
                    if (data.status ="Success")
                    {
                        alert(data.token);
                        $('#spinner').addClass('hide');
                        $(this).attr('disabled', false);
                    }
                    if (data.status = "Failed") {
                        $scope.errorsLogin = data.errors;
                    }
                });
        };

    });
})();