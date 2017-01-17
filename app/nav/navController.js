/*
* @Author: yiming
* @Date:   2017-01-16 11:10:50
* @Last Modified by:   yiming
* @Last Modified time: 2017-01-16 19:33:42
*/

;(function() {

  angular.module("dbMVP")
  .controller("NavController", ["$scope", '$rootScope', 'hotService', function($scope, $rootScope, hotService) {
  	$scope.inputText = "";
  	$scope.searchMoive = function(event, text) {
  		var url = "http://api.douban.com/v2/movie/search";
  		var keycode = event.keyCode || event.which;
  		if(keycode === 13 || keycode === 108) {
  			$rootScope.text = text;
        window.location.href = "/#/search";
  		}
  	}
  }]);


})();