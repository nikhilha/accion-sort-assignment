/*globals sortModule:false*/

sortModule.service('SortService', function($http) {
	var getData = function() {
        return $http({
        	method:"GET", 
        	url:"https://jsonplaceholder.typicode.com/posts"}).then(function(result){
            return result.data;
        });
    };
    return { getData: getData };
});