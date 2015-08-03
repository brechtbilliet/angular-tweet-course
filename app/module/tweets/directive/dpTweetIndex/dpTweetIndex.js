(function(){
	'use strict';
	
	angular.module('app').directive('dpTweetIndex', dpTweetIndexDirective);

	function dpTweetIndexDirective(){
		return{
			restrict: 'E',
			templateUrl: 'app/module/tweets/directive/dpTweetIndex/dpTweetIndex.html'
		};
	}
}());