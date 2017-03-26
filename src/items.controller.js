(function () {
'use strict';

angular.module('MenuApp')
.controller('itemsController', itemsController);

// 'item' is injected through state's resolve
itemsController.$inject = ['items']
function itemsController(items) {
  var itemsCtrl = this;
  itemsCtrl.items = items;
}

})();