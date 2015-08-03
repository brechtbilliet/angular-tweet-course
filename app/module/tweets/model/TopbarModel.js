(function(){
	'use strict';
	
	angular.module('app.tweets').factory('TopbarModel', Model);

	Model.$inject = ['Tweet'];
	function Model(Tweet){
		return TopbarModel;

		function TopbarModel(sharedModel){
			var self = this;
			this.tweetContent = '';
			this.toggleCollapsed = toggleCollapsed;
			this.post = post;

			function toggleCollapsed(){
				sharedModel.topbarCollapsed = !sharedModel.topbarCollapsed;
			}

			function post(){
				sharedModel.tweets.push(new Tweet('@dummyUser', self.tweetContent));
				self.tweetContent = '';
			}
		}
	}
}());