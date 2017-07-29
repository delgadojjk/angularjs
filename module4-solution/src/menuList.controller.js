(function () {
	
	angular.module('MenuApp')

	.controller('MenuListController',MenuListController);

	MenuListController.$inject=['items'];
	function MenuListController(items) {
		var menuList= this;
		console.log("items entro " + JSON.stringify(items.data.menu_items));
		menuList.items= items.data.menu_items;		
	}

})();