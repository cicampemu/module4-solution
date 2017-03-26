(function () {
'use strict';

angular.module('MenuApp')
.config(routesConfig);

routesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function routesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/home.template.html'
  })

  // Premade list page
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/categories.template.html',
    controller: 'categoriesController as categoriesCtrl',
    resolve: {
      categories: ['menuDataService', function (menuDataService) {
        return menuDataService.getAllCategories();
      }]
    }
  })

  .state('items', {
    url: '/items/{categoryShortName}',
    templateUrl: 'src/items.template.html',
    controller: 'itemsController as itemsCtrl',
    resolve: {
      items: ['menuDataService', '$stateParams', function (menuDataService, $stateParams) {
        return menuDataService.getItemsForCategory($stateParams.categoryShortName);
      }]
    }
  });
}

})();