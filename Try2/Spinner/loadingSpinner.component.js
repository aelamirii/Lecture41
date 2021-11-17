(function () {
'use strict';

angular.module('Spinner')
.component('spinnerLoading', {
  templateUrl: 'Try2/Spinner/loadingSpinner.template.html',
  controller: SpinnerController
});

SpinnerController.$inject = ['$rootScope'];
function SpinnerController($rootScope) {

  var $ctrl = this;

  var Cancellers = [];

  $ctrl.$onInit = function () {

    var cancel = $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams, options) {
        $ctrl.showSpinner = true;
    });

    Cancellers.push(cancel);

    cancel = $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams, otpions) {
      $ctrl.showSpinner = false;
    });

    Cancellers.push(cancel);

    cancel = $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, options) {
      $ctrl.showSpinner = false;
    });

    Cancellers.push(cancel);

  };

  $ctrl.$onDestroy = function () {
      Cancellers.forEach(function (item) {
        item();
      });

  }


}



})();
