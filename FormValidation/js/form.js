/**
 * Created by samco on 8/29/2014.
 */
//'use strict';
someapp.controller('myformController',['$scope',function($scope){
    $scope.something = "hi";
    $scope.a = "";
    $scope.reset= function(){
        $scope.user = "";
        $scope.a = "";
    };
    $scope.save= function(user){
        $scope.a = angular.copy(user);
    };

}]);