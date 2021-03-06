(function() {
  'use strict';
  angular.module('civic.events')
    .directive('variantTabs', variantTabs);

  // @ngInject
  function variantTabs(Security) {
    var directive = {
      restrict: 'E',
      replace: true,
      templateUrl: 'app/views/events/variants/directives/variantTabs.tpl.html',
      link: /*ngInject*/ function($scope) {
        $scope.isAuthenticated = Security.isAuthenticated;
      }
    };

    return directive;
  }
})();
