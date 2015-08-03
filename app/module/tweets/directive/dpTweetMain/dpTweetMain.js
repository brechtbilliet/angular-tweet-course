(function(){
	'use strict';
	
	angular.module('app').directive('dpTweetMain', dpTweetMainDirective);

	function dpTweetMainDirective(){
		Controller.$inject = ['RootModel'];
		return{
			restrict: 'E',
			templateUrl: 'app/module/tweets/directive/dpTweetMain/dpTweetMain.html',
			controllerAs: 'tweetMainVm',
			controller: Controller
		};

		function Controller(RootModel){
			this.sharedModel = RootModel.sharedModel;
		}
	}
}());