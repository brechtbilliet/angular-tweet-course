(function(){
	'use strict';
	
	angular.module('app.tweets').factory('ContentModel', Model);

	function Model(){
		return ContentModel;

		function ContentModel(sharedModel){
			this.tweets = sharedModel.tweets;
		}
	}
}());