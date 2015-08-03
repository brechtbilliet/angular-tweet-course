(function(){
	'use strict';
	
	angular.module('app.tweets').factory('SidebarModel', Model);

	function Model(){
		return SidebarModel;

		function SidebarModel(sharedModel){
			this.tweets = sharedModel.tweets;
			this.toggleCollapsed = toggleCollapsed;

			function toggleCollapsed(){

			}
		}
	}
}());