/**
 * Created by samco on 8/29/2014.
 */
//'use strict';
someapp.controller('myformController',['$scope',function($scope){

    $scope.a = {};
    $scope.reset= function(){
//        $scope.user = "";
//        $scope.a = "";
        $scope.user = angular.copy($scope.a);

    };
    $scope.save= function(user){
        $scope.a = angular.copy(user);
    };

    $scope.isUnchanged = function(user){
        return angular.equals(user,$scope.a );
    }

    $scope.reset();

}]);