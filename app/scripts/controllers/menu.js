'use strict';

/**
 * @ngdoc function
 * @name udaciMealsApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the udaciMealsApp
 */
angular.module('udaciMealsApp')
  .controller('MenuCtrl', function () {
  this.items = [
      {
          id: 'strawberry-pudding',
          name: 'Strawberry-Pudding',
          img: 'yeoman.png',
          calories: 430,
          rating: 4.2
      },
      {
          id: 'choc-pudding',
          name: 'Chocolate-Pudding',
          img: 'strawberry-pudding.jpg',
          calories: 200,
          rating: 3
      },
      {
          id: 'choc-cake',
          name: 'Chocolate-Cake',
          img: 'strawberry-pudding.jpg',
          calories: 500,
          rating: 1.2
      }
    ];
      
      this.increment = function(item) {
          item.rating = ((item.rating * 10) + 1) /10;
      };
      this.decrement = function(item) {
          item.rating = ((item.rating * 10) - 1) /10;
      };

  });
