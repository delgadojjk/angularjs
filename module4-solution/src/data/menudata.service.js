(function () {
 
 'use strict';

 angular.module('Data')
 
 .constant('baseUrl','https://davids-restaurant.herokuapp.com')
 .service('MenuDataService',MenuDataService);


 MenuDataService.$inject=['$http','baseUrl'];
 function MenuDataService($http, baseUrl) {
    var service = {
            getAllCategories 	: getAllCategories,
            getItemsForCategory : getItemsForCategory
        };

    return service; 

   
    function getAllCategories() {
          
        	var response = $http({
      			method: "GET",
      			url: (baseUrl + "/categories.json")
    		  });

    		  return response;
    };

    function getItemsForCategory(categoryShortName) {
        	var response = $http({
      			method: "GET",
      			url: (baseUrl + "/menu_items.json?category="+categoryShortName)
    		  });

          return response;
    }

 }

})();