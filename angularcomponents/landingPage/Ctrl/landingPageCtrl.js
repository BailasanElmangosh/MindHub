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
        $scope.signUp = function () {
            $scope.showSpinnerSign = true;
            signupSrv.signUp($scope.userSignUp)
                .success(function (data, status) {
                    $scope.showSuccesspop = true;
                    $scope.showSpinnerSign = false;
                    if (data.status =="Success")
                    {   angular.element(document.querySelector('#close')).click();
                        var signupSuccessPopUp = angular.element(document.querySelector('#popupSeccess'));
                        signupSuccessPopUp.modal('show');
                        angular.element(document.querySelector("#signFrm").reset());
                    }
                    if (data.status == "Failed") {
                        $scope.errorsSignUp = data.errors;
                    }
                });
        };

        $scope.login = function (key) {
            loginSrv.login($scope.userLogin)
                .success(function (data, status) {
                    if (data.status =="Success")
                    {  
                        cookies.set(key,data.token);
                        console.log(data.token)
                        cookies.set('socketid',data.userId);
                        if(data.userType=="Chance owner")
                        {
                            window.location ="/chanceOwner.html#/liveCourse";
                        }
                        else
                        {
                             window.location ="/student.html#/profile";
                        }
                       
                    }
                    else{
                    }
                });
        };
        
        $scope.token = function (key) 
            {
                cookies.get(key);
                console.log(key);
            };
            
    });

})();