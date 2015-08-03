(function(){
	'use strict';
	
	angular.module('app').directive('dpTweetTopbar', dpTweetTopbarDirective);

	function dpTweetTopbarDirective(){
		Controller.$inject = ['RootModel'];
		return{
			restrict: 'E',
			templateUrl: 'app/module/tweets/directive/dpTweetTopbar/dpTweetTopbar.html',
			controller: Controller,
			controllerAs: 'tweetTopbarVm'
		};

		function Controller(RootModel){
			var self = this;
			this.model = RootModel.topbarModel;
			this.sharedModel = RootModel.sharedModel;
			this.post = post;
			this.toggleCollapsed =toggleCollapsed;

			function post(){
				self.model.post();
			}

			function toggleCollapsed(){
				self.model.toggleCollapsed();
			}
		}
	}
}());