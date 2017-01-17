/*
* @Author: yiming
* @Date:   2017-01-17 10:38:55
* @Last Modified by:   yiming
* @Last Modified time: 2017-01-17 10:41:35
*/


;(function() {
    angular.module('dbMVP')
    	.directive("setfocus", [function() {
    		return {
    			link:function(scope, elem, attrs) {
    				// elem让他的兄弟全部没有该class，只有他有
    				// elem.parent().siblings().toggleClass('active');
    				// elem.addClass('active');

    				elem.parent().children().each(function(index, el) {
    					$(el).on("click", function() {
    						var $this = $(this);
    						$this.siblings().removeClass('active');
    						$this.addClass('active');
    					})
    				});

    			}
    		}
    	}]);
        
})();