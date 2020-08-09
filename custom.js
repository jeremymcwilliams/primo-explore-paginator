(function(){
"use strict";
'use strict';

var app = angular.module('viewCustom', ['paginator']);



angular.module('paginator', []).component('prmSearchResultListAfter', {
  bindings: {parentCtrl: '<' },
  controller: function controller($scope, $element){
    this.$onInit = function () {



    }
  },
  template: '<p>hello!</p>'




});


})();
