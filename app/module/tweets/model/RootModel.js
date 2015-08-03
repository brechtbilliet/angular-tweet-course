(function(){
	'use strict';
	
	angular.module('app.tweets').factory('RootModel', RootModel);

	RootModel.$inject = ['SharedModel', 'TopbarModel', 'ContentModel', 'SidebarModel'];
	function RootModel(SharedModel, TopbarModel, ContentModel, SidebarModel){
		var sharedModel = new SharedModel();
		return{
			sidebarModel: new SidebarModel(sharedModel),
			topbarModel: new TopbarModel(sharedModel),
			contentModel: new ContentModel(sharedModel),
			sharedModel: sharedModel
		};
	}
}());