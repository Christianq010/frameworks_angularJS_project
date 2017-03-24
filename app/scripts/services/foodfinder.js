'use strict';

/**
 * @ngdoc service
 * @name udaciMealsApp.foodFinder
 * @description
 * # foodFinder
 * Service in the udaciMealsApp.
 */
angular.module('udaciMealsApp')
  .service('foodFinder', ['$http', function($http) {
        this.getMenu = function () {
            return $http({ method: 'GET', url: '/menu/menu.json' });
        };
  
        this.getItem = function(id) {
            // var menuItemFile = '/menu/' + id + '.json';
            // return $.get(menuItemFile);
            return $http({ method: 'GET', url: '/menu/' + id + '.json' });
        };
        
  }]);
