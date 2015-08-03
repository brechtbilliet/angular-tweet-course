(function(){
	'use strict';
	var module = angular.module('app.about', ['ngRoute']);

	function config($routeProvider){
		$routeProvider.when('/about', {
			templateUrl: 'app/module/about/view/index.html'
		});

	}
	config.$inject = ['$routeProvider'];
	module.config(config);
}());