(function () {
	'use strict';

	angular.module('public')

	.controller('MyInfoController',MyInfoController);

	MyInfoController.$inject=['userInfo', 'MenuService'];

	function MyInfoController(userInfo,MenuService) {
		var ctrl=this;
		if (userInfo){
			 MenuService.getMenuItem(userInfo.favoriteDish)
      			.then(function(response) {
        		ctrl.menuItem = response;
      		})

      		ctrl.userInfo=userInfo;
		}
		
		
	}

})();