require.config({
	paths:{
		angular: "framework/angular",
		angularAnimate: "framework/angular-animate",
		angularRoute: "framework/angular-route",
		domReady: "js/domReady",
		app: "js/app",
		controllers: "js/controllers",
		directives: "js/directives",
		services: "js/services",
		filters: "js/filters"
	},
	shim: {
		angular: {
			exports: 'angular'
		},
		angularAnimate: {
			deps: ['angular']
		},
		angularRoute: {
			deps: ['angular']
		}
	}
});
require([
	'angular',
	'angularAnimate',
	'angularRoute',
	'app',
	'controllers',
	'directives',
	'services',
	'filters',
	'domReady!'
	], function(){
		angular.bootstrap(document.body, ['bookStoreApp']);
});