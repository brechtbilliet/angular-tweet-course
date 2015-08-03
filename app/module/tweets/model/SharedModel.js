(function(){
	'use strict';
	
	angular.module('app.tweets').factory('SharedModel', Model);

	Model.$inject = ['TweetService'];
	function Model(TweetService){
		return SharedModel;

		function SharedModel(){
			this.tweets = TweetService.getAll();
			this.sidebarCollapsed = false;
			this.topbarCollapsed = false;
		}
	}
}());