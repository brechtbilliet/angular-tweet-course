(function(){
	'use strict';
	
	angular.module('app').directive('dpTweetContent', dpTweetContentDirective);

	function dpTweetContentDirective(){
		Controller.$inject = ['RootModel'];
		return{
			restrict: 'E',
			templateUrl: 'app/module/tweets/directive/dpTweetContent/dpTweetContent.html',
			controller: Controller,
			controllerAs: 'tweetContentVm'
		};

		function Controller(RootModel){
			this.model = RootModel.contentModel;
		}
	}
}());