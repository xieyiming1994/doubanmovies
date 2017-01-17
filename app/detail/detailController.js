/*
* @Author: yiming
* @Date:   2017-01-16 17:34:30
* @Last Modified by:   yiming
* @Last Modified time: 2017-01-16 19:35:10
*/
;(function() {

  angular.module("dbMVP")
  .controller("DetailController", ["$scope", '$routeParams', 'hotService', function($scope, $routeParams, hotService) {
  	// 需要在这里面拿到ID值，来请求该电影的详细信息
  	console.log($routeParams.id);
  	var url = "http://api.douban.com/v2/movie/subject/" + $routeParams.id;
  	hotService.getAllHotMovie(url, {}, function(data) {
  		console.log(data);
  		$scope.movieDetail = data;
  		$scope.$digest();
  	})
  }]);


})();