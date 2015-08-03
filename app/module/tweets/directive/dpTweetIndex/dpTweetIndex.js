(function(){
	'use strict';
	
	angular.module('app').directive('dpTweetIndex', dpTweetIndexDirective);

	function dpTweetIndexDirective(){
		Controller.$inject = ['RootModel'];
		return{
			restrict: 'E',
			templateUrl: 'app/module/tweets/directive/dpTweetIndex/dpTweetIndex.html',
			controller: Controller,
			controllerAs: 'tweetIndexVm'
		};

		function Controller(RootModel){
			this.sharedModel = RootModel.sharedModel;
		}
	}
}());