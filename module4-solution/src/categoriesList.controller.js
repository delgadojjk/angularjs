(function () {
	
	angular.module('MenuApp')

	.controller('CategoriesListController',CategoriesListController);

	CategoriesListController.$inject=['items'];
	function CategoriesListController(items) {
		var categoriesList= this;
		//console.log("items entro " + JSON.stringify(items.data));
		categoriesList.items= items.data;		
	}

})();