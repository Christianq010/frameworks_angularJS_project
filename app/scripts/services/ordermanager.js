'use strict';

/**
 * @ngdoc service
 * @name udaciMealsApp.orderManager
 * @description
 * # orderManager
 * Service in the udaciMealsApp.
 */
angular.module('udaciMealsApp')
  .service('orderManager', function () {
    var selectedDay = 'Monday';

    var orderSelection = {
        Monday: {
            breakfast: '',
            lunch: '',
            dinner: ''
        },
        Tuesday: {
            breakfast: '',
            lunch: '',
            dinner: ''
        },
        Wednesday: {
            breakfast: '',
            lunch: '',
            dinner: ''
        },
        Thursday: {
            breakfast: '',
            lunch: '',
            dinner: ''
        },
        Friday: {
            breakfast: '',
            lunch: '',
            dinner: ''
        }
    };

  });
