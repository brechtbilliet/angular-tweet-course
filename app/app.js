(function(){
	'use strict';
	var app = angular.module('app', ['app.tweets','app.about', 'ngRoute']);
	// register our dependencies
	app.constant('_', _);

	app.run(function(){
	});
}());