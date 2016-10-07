/**
 * Created by Brandon on 10/5/2016.
 */
 blogX.controller('HomeCtrl',['$scope', '$log', '$http',  'toastr','API_URL','$uibModal',
 	function ($scope, $log, $http, toastr, API_URL,$uibModal) {
 		$scope.articles = [] //holds articles for preview
 		$scope.article = null // holds first article

 		$scope.getNews = function(){
 			var qs = {'offset':20}
 			$http.get(API_URL+"news/nyt", {params:qs}).then(
 				function(response){
 					$scope.article = response.data.results.pop()
 					$scope.articles = response.data.results;

 				}, $log
 				)

 		}
 		$scope.getNews()

 		$scope.game = function () {
            var modalInstance = $uibModal.open({
                templateUrl: 'views/game.html',
                controller: 'GameMdlCtrl',
                size: 'lg'
            })
        }

 	}]);