/**
 * Created by Brandon on 10/7/2016.
 */
blogX.controller('GameMdlCtrl', ['$scope','$uibModalInstance',
    function ($scope, $uibModalInstance) {
        $scope.close =function () {
            $uibModalInstance.close();
        }
    }]);