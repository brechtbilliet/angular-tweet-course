(function(){
	'use strict';
	
	angular.module('app').directive('dpTweetTopbar', dpTweetTopbarDirective);

	function dpTweetTopbarDirective(){
		return{
			restrict: 'E',
			templateUrl: 'app/module/tweets/directive/dpTweetTopbar/dpTweetTopbar.html'
		};
	}
}());