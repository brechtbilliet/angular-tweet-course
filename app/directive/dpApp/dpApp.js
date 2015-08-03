(function(){
	'use strict';
	
	angular.module('app').directive('dpApp', dpAppDirective);

	function dpAppDirective(){
		return{
			restrict: 'E',
			templateUrl: 'app/directive/dpApp/dpApp.html'
		};
	}
}());