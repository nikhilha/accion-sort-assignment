/*globals sortModule:false*/

sortModule.controller('SortController', function($scope, SortService) {
	$scope.orderByField = 'userid';
    $scope.reverseSort = false;

    var myDataPromise = SortService.getData();
    myDataPromise.then(function(result) {  
       $scope.data = result;
    });
    
});