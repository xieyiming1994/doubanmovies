/*
* @Author: yiming
* @Date:   2017-01-16 17:39:04
* @Last Modified by:   yiming
* @Last Modified time: 2017-01-16 17:39:17
*/

;(function() {

  angular.module("dbMVP")
  .controller("SearchController", ["$scope", "$rootScope", function($scope, $rootScope) {
  	console.log($rootScope.text);
  }]);


})();