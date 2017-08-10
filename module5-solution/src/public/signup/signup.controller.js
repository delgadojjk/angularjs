(function () {
	'use strict';

	angular.module('public')

	.controller('SignUpController', SignUpController);

	SignUpController.$inject=['MenuService']

	function SignUpController(MenuService) {
			var ctrl= this;	
			ctrl.user={};
			ctrl.favoriteDish={};
			ctrl.success = false;
			ctrl.error = false;

			ctrl.submit = function() {
	    		MenuService.getFavoriteDish(ctrl.user.favoriteDish).then(function (response) {			      	
			      MenuService.setUserProfile(ctrl.user);
			      ctrl.success = true;
			      ctrl.error = false;

			    }, function (response) {
			      ctrl.success = false;
			      ctrl.error = true;
			    });
	  		};
		};

		
	

})();