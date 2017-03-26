(function () {
'use strict';

angular.module('MenuApp')
.controller('categoriesController', categoriesController);

// 'item' is injected through state's resolve
categoriesController.$inject = ['categories']
function categoriesController(categories) {
  var categoriesCtrl = this;
  categoriesCtrl.categories = categories;

}

})();