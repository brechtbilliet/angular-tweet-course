(function(){
	'use strict';
	
	angular.module('app.tweets').factory('Tweet', Entity);

	function Entity(){
		return Tweet;

		function Tweet(user, content){
			this.user = user;
			this.content = content;
			this.isStarred = false;
		}
	}
}());