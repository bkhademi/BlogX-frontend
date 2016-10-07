blogX.controller('LoginCtrl',['$scope','$auth', 'toastr','$location',
  function($scope,$auth, toastr, $location){
    $scope.signUp = function () {
      $auth
      .signup({email: $scope.email, password: $scope.password})
      .then(function (response) {
        // set the token received from server
        $auth.setToken(response);
        // go to home
        $location.path('/home');
      })
      .catch(function (response) {
        console.log("error response", response);
      })
    };

    $scope.login = function () {
      $auth
      .login({email: $scope.email, password: $scope.password})
      .then(function (response) {
        $auth.setToken(response);
        $location.path('/home');
      })
      .catch(function (response) {
        toastr.error(
          'Email or password not correct!',
          {closeButton: true}
          );
      })
    };

    $scope.auth = function (provider) {
      $auth.authenticate(provider)
      .then(function (response) {
        console.debug("success", response);
        $location.path('/home');
      })
      .catch(function (response) {
        console.debug("catch", response);
      })
    }
  }]);