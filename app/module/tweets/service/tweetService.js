(function(){
	'use strict';
	
	angular.module('app.tweets').factory('TweetService', TweetService);

	TweetService.$inject = ['Tweet'];
	function TweetService(Tweet){
		return{
			getAll: getAll
		};

		function getAll(){
			var returnObj = [];
			for(var i = 0; i < 5; i++){
				returnObj.push(new Tweet('@brecht', 'content ' + i));
			}
			return returnObj;
		}
	}
}());