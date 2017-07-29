(function () {
 
	 'use strict';
	 
	 angular.module('MenuApp')
	.component('categories', {
	  templateUrl: 'src/components/categories/categories.componente.template.html',
	  bindings: {
	   items: '<'
	  }
	});

})();