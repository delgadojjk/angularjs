(function () {
 'use strict';

 angular.module('MenuApp')
 .config(RoutesConfig);

 RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

 function RoutesConfig($stateProvider,$urlRouterProvider) {
 	
 	// Redirect to home page if no other URL matches
  	$urlRouterProvider.otherwise('/');

  	$stateProvider

  	// Home page
  	.state('home', {
    	url: '/',
    	templateUrl: 'src/templates/home.template.html'
  	})
  	 // categories page
  	.state('categories', {
    	url: '/categories',
    	templateUrl: 'src/templates/categories.template.html',
      controller: 'CategoriesListController as categoriesList',
      resolve: {
        items: ['MenuDataService', function (MenuDataService) {
          return MenuDataService.getAllCategories()
                 .then(function(response){
                    return response.data;
                 });
        }]
      }
  	})

    // item detail categories page
    .state('categories.items', {
      url: '/items{categoryShortName}',
      templateUrl: 'src/templates/menuList.template.html',
      controller: 'MenuListController as menuList',
      resolve: {
        items: ['$stateParams','MenuDataService', 
                function ($stateParams,MenuDataService) {
                 return MenuDataService.getItemsForCategory($stateParams.categoryShortName)
                  .then(function (response) {
                  return response.data.menu_items;
                  });
        }]
      }
      
    })


 };

})();