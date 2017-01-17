/**
 * Created by  on 2017/1/14.
 */
/**
 * Main application controller
 *
 * You can use this controller for your whole app if it is small
 * or you can have separate controllers for each logical section
 *
 */

;(function() {

  angular.module("dbMVP")
  .controller("HotController", ["$scope", 'hotService', function($scope, hotService) {
  	$scope.isLoading = true;
    $scope.currentPage = 1;
    $scope.totalPage = 1;
    var pageCount = 10;

  	var getUrl = "http://api.douban.com/v2/movie/in_theaters";
  	hotService.getAllHotMovie(getUrl, {start:0, count: pageCount}, function(result) {
  		$scope.allHotMovies = result;
      $scope.isLoading = false; 
      $scope.totalPage = Math.ceil(result.total / pageCount);
  		$scope.$digest();
  	});

    $scope.nextPage = function(page) {
      if(page == $scope.totalPage) {
        return;
      }
      $scope.isLoading = true;
      var start = page*pageCount;
      hotService.getAllHotMovie(getUrl, {start:start, count: pageCount}, function(result) {
        $scope.allHotMovies = result;
        $scope.isLoading = false; 
        $scope.totalPage = Math.ceil(result.total / pageCount);
        $scope.currentPage++;
        $scope.$digest();
      });
    }

    $scope.previousPage = function(page) {
      if(page === 1) {
        return;
      }

      $scope.isLoading = true;
      var start = (page-1)*pageCount;
      hotService.getAllHotMovie(getUrl, {start:start, count: pageCount}, function(result) {
        $scope.allHotMovies = result;
        $scope.isLoading = false; 
        $scope.totalPage = Math.ceil(result.total / pageCount);
        $scope.currentPage--;
        $scope.$digest();
      });
    }

    $scope.$on("message", function(event, data) {
      $scope.isLoading = true; 

      var url = "http://api.douban.com/v2/movie/search";

      hotService.getAllHotMovie(url, {q:data.inputText}, function(result) {
        $scope.allHotMovies = result;
        $scope.isLoading = false; 
        $scope.totalPage = Math.ceil(result.total / pageCount);
        $scope.$digest();
      });
    })

  }]);

})();
