/* globals angular:false*/

window.sortModule = angular.module('SortModule', ['ngRoute']);

window.sortModule.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/sort', {
    templateUrl: 'sort/sort.html',
    controller: 'SortController'
  });
}]);