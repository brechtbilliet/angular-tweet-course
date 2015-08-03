(function(){
	'use strict';
	
	angular.module('app.tweets').factory('SharedModel', Model);

	function Model(){
		return SharedModel;

		function SharedModel(){
			this.tweets = [];
			this.sidebarCollapsed = false;
			this.topbarCollapsed = false;
		}
	}
}());