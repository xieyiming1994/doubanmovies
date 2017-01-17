/*
* @Author: yiming
* @Date:   2017-01-16 11:41:34
* @Last Modified by:   yiming
* @Last Modified time: 2017-01-16 18:56:37
*/
;(function(angular) {

	angular.module('dbMVP').service('hotService',
	['$http', function($http) {
		this.getAllHotMovie = function(url, paramObj, fn) {
			function getData(result) {
				fn(result);
			}
		window.getData = getData;
		var paramString = "";
		for(item in paramObj) {
			paramString += item + "=" + paramObj[item] + "&";
		}
		var allUrl = url + "?" + paramString;
		
		var script = document.createElement("script");

		script.src = allUrl + "callback=getData";

		document.body.appendChild(script);	
		}
	}])	
})(angular)