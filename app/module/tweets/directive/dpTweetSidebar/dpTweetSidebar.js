(function(){
	'use strict';
	
	angular.module('app').directive('dpTweetSidebar', dpTweetSidebarDirective);

	function dpTweetSidebarDirective(){
		Controller.$inject = ['RootModel'];
		return{
			restrict: 'E',
			templateUrl: 'app/module/tweets/directive/dpTweetSidebar/dpTweetSidebar.html',
			controller: Controller,
			controllerAs: 'tweetSidebarVm'
		};

		function Controller(RootModel){
			var self = this;
			this.model = RootModel.sidebarModel;
			this.sharedModel = RootModel.sharedModel;
			this.toggleCollapsed = toggleCollapsed;

			function toggleCollapsed(){
				self.model.toggleCollapsed();
			}
		}
	}
}());