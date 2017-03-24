'use strict';

/**
 * @ngdoc function
 * @name udaciMealsApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the udaciMealsApp
 */
angular.module('udaciMealsApp')
  .controller('MenuCtrl', ['$scope', 'foodFinder', 'orderManager',function($scope, menu, orderManager) {
      var vm = this;

      menu.getMenu().then(function(data) {
          $scope.$apply(function() {
              vm.items = data;
          });
      });

      this.chooseItem = function(menuCategory, menuItemName) {
          orderManager.chooseOptionMenu(menuCategory, menuItemName);
      };

      this.increment = function(item) {
          item.rating = ((item.rating * 10) + 1) / 10;
      };
      this.decrement = function(item) {
          item.rating = ((item.rating * 10) - 1) / 10;
      };

  }]);
