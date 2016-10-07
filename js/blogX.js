/**
 * Created by Brandon on 10/5/2016.
 */
 var blogX = angular.module('blogX', ['ngRoute', 'satellizer', 'toastr','ngStorage', 'ui.bootstrap'
 	]);
 blogX.constant("API_URL","http://localhost:8000/api/")
 blogX.config(function ($authProvider, API_URL) {
  //Reset headers to avoid OPTIONS request (aka preflight)
  $authProvider.baseUrl = API_URL;

  $authProvider.facebook({
    clientId: 1619052845061519,
    // by default, the redirect URI is http://localhost:5000
    redirectUri: 'http://localhost:8080/index.html'
  });
});

 blogX.controller('MainCtrl', ['$scope', '$auth', "$localStorage", function($scope, $auth, $localStorage){
 		$scope.isAuthenticated = function() {
 			var is = $auth.isAuthenticated();
			return is

		};
		$scope.$storage = $localStorage;

		console.info('localStorage.user',$scope.$storage.user);
		$scope.logout = function(){
			if (!$auth.isAuthenticated()) { return; }
			$auth.logout()
				.then(function() {
					logger.info('You have been logged out');
					$location.path('/');
				});
		};
 	
 }])