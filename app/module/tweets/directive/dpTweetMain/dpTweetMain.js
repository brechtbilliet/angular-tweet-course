(function(){
	'use strict';
	
	angular.module('app').directive('dpTweetMain', dpTweetMainDirective);

	function dpTweetMainDirective(){
		return{
			restrict: 'E',
			templateUrl: 'app/module/tweets/directive/dpTweetMain/dpTweetMain.html'
		};
	}
}());