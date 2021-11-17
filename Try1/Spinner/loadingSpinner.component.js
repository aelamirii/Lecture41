(function () {
'use strict';

angular.module('Spinner')
.component('loadingSpinner', {
  templateUrl: 'Try1/Spinner/loadingSpinner.template.html',
  controller: SpinnerController
});




SpinnerController.$inject = ['$rootScope'];
function SpinnerController($rootScope) {
console.log("aaaaaaaaaaaaaaa");
  var $ctrl = this;

  var Cancellers = [];

  $ctrl.$onInit = function () {

    var cancel = $rootScope.$on('$stateChangeStart',
    function (event, toState, toParams, fromState, fromParams, options ) {
          $ctrl.showSpinner = true;
    });

    Cancellers.push(cancel);

    cancel = $rootScope.$on('$stateChangeSuccess',
  function (evetn, toState, toParams, fromState, fromParams, options) {
          $ctrl.showSpinner = false;
    });

    Cancellers.push(cancel);


    cancel = $rootScope.$on('$stateChangeError',
      function (event, toState, toParams, fromState, fromParams, options) {
          $ctrl.showSpinner = false;
      });

      Cancellers.push(cancel);

      console.log("$ctrl.showSpinner ,",$ctrl.showSpinner);
  }

  $ctrl.$onDestroy = function () {
    Cancellers.forEach(function (item) {
      item();
    });

  }


}


})();
