/*globals sortModule:false*/

sortModule.service('SortService', function($http) {
	/* Returns the JSONData to the calling function
	 * Syntax to call : SortService.getData() 
	 */
	var getData = function() {
        return $http({
        	method:"GET", 
        	url:"https://jsonplaceholder.typicode.com/posts"}).then(function(result){
            return result.data;
        });
    };
    return { getData: getData };
});