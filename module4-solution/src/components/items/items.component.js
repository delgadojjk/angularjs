(function () {
 
	 'use strict';
	 
	 angular.module('MenuApp')
	.component('items', {
	  templateUrl: 'src/components/items/items.componente.template.html',
	  bindings: {
	   menuItems: '<'
	  }
	});

})();