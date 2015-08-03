(function(){
	'use strict';
	
	angular.module('app').directive('dpTweetContent', dpTweetContentDirective);

	function dpTweetContentDirective(){
		return{
			restrict: 'E',
			templateUrl: 'app/module/tweets/directive/dpTweetContent/dpTweetContent.html'
		};
	}
}());