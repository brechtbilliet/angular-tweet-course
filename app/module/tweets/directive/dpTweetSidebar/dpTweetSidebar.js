(function(){
	'use strict';
	
	angular.module('app').directive('dpTweetSidebar', dpTweetSidebarDirective);

	function dpTweetSidebarDirective(){
		return{
			restrict: 'E',
			templateUrl: 'app/module/tweets/directive/dpTweetSidebar/dpTweetSidebar.html'
		};
	}
}());