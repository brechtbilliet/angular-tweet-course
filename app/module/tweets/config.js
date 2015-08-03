(function(){
	'use strict';
	var module = angular.module('app.tweets', ['ngRoute']);

	function config($routeProvider){
		$routeProvider.when('/tweets', {
			templateUrl: 'app/module/tweets/view/index.html'
		})
		.otherwise({
			templateUrl: 'app/module/tweets/view/index.html'
		});

	}
	config.$inject = ['$routeProvider'];
	module.config(config);
}());