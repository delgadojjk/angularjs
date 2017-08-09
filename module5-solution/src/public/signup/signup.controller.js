(function () {
	'use strict';

	angular.module('public')

	.controller('SignUpController', SignUpController);

	SignUpController.$inject=['MenuService']

	function SignUpController(MenuService) {
		var ctrl= this;
		
		ctrl.submit=function () {
			MenuService.getFavoriteDish(ctrl.user.favoriteDish).
			     then(function (response) {
				console.log(response.data);
			})
			
		};

		
	};

})();