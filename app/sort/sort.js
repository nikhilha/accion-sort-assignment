'use strict';

angular.module('myApp.sort', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/sort', {
    templateUrl: 'sort/sort.html',
    controller: 'SortCtrl'
  });
}])

.controller('SortCtrl', function($scope, $http) {
  $scope.orderByField = 'userid';
  $scope.reverseSort = false;

  //this should be actually written in service and then called from controller
  var getJSONData = function() {
    $http.get("http://jsonplaceholder.typicode.com/posts")
    .then(function(response) {
        $scope.data = response.data;
    });
  }

  getJSONData();
});