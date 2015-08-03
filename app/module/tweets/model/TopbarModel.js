(function(){
	'use strict';
	
	angular.module('app.tweets').factory('TopbarModel', Model);

	function Model(){
		return TopbarModel;

		function TopbarModel(sharedModel){
			this.tweetContent = '';
			this.toggleCollapsed = toggleCollapsed;
			this.post = post;

			function toggleCollapsed(){

			}

			function post(){
				
			}
		}
	}
}());