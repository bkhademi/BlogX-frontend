/**
 * Created by Brandon on 10/5/2016.
 */
blogX.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'views/home.html',
            controller: 'HomeCtrl'
        })
        .when('/login',{
        	templateUrl:'views/login.html',
        	controller:'LoginCtrl'
        })
        .otherwise({
            redirectTo: '/home'
        })
}]);