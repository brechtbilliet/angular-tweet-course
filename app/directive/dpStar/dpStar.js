(function() {
	'use strict';
	angular.module('app').directive('dpStar', Directive);

	function Directive() {
		return {
			restrict: 'E',
			scope: {
				starred: '='
			},
			controller: Controller,
			controllerAs: 'starVm',
			bindToController: true,
			templateUrl: 'app/directive/dpStar/dpStar.html'
		};

		function Controller() {
			var vm = this;
			vm.toggle = toggle;

			function toggle() {
				vm.starred = !vm.starred;
			}
		}
	}
}());