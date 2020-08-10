(function(){
"use strict";
'use strict';

var app = angular.module('viewCustom', ['paginator']);



angular.module('paginator', []).component('prmSearchResultListAfter', {
  bindings: {parentCtrl: '<' },
  controller: function controller($scope, $element){
    this.$onInit = function () {
      console.log("paginator:");
      console.log($scope);
      var currentUrl=$scope.$parent.$ctrl.briefResultService.$location.$$absUrl;
      var service=$scope.$parent.$ctrl.briefResultService;

      var ro=$scope.$parent.$ctrl.briefResultService.searchStateService.resultObject;
      const urlParams = new URLSearchParams(currentUrl);

      var getTotals = setInterval(function() {

         if (ro.info.total) {
           $scope.totalResults=ro.info.total;
           console.log($scope.totalResults)
           console.log(ro.info.last)
           var offset=parseInt(urlParams.get('offset'))
           console.log(offset)

            clearInterval(getTotals);

         }
      }, 100);

    }
  },
  template: '<p><a href="">next page</a></p>'




});


})();
