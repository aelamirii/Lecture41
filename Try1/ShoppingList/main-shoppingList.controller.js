(function () {
'use strict';

angular.module('ShoppingList')
.controller('MainShoppingListController', MainShoppingListController);

MainShoppingListController.$inject  = ['items_resolve'];
function MainShoppingListController(items_resolve) {

  var mainList = this;

  mainList.Items = items_resolve;

  
}


// MainShoppingListController.$inject  = ['ShoppingListService'];
// function MainShoppingListController(ShoppingListService) {
//
//   var mainList = this;
//
//   mainList.Items = [];
//
//   mainList.$onInit = function () {
//
//     console.log("items:",ShoppingListService.getItems());
//
//     ShoppingListService.getItems()
//     .then(function (result) {
//           mainList.Items = result;
//     })
//
//   }
//
// }



})();
