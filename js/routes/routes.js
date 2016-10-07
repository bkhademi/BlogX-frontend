/**
 * Created by Brandon on 10/5/2016.
 */
blogX.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'views/home.html',
            controller: 'HomeCtrl'
        })

        .otherwise({
            templateUrl: 'views/home.html'
        })
}]);