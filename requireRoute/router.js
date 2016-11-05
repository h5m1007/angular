define(['angular', 'require', 'angular-route'], function(angular, require){
	angular.module('webapp', ['ngRoute'])
		// .config([依赖服务],function(){})
		.config(['$routeProvider', '$controllerProvider', function($routeProvider, $controllerProvider){
			$routeProvider
				.when('/module1', {
					templateUrl: 'module1/tpl.html',
					controller: 'module1Controller',
					resolve: {
						// 当路由更改html前执行
						keyName: function($q){
							// resolve: {key: value} value应为function
							var deferred = $q.defer();
							require(['module1/module1.js'], function(controller){
								$controllerProvider.register('module1Controller', controller);
								deferred.resolve();
							});
							return deferred.promise;
						}
					}
				})
				.otherwise({
					// 默认路由
					redirectTo: '/module1'
				});
		}]);

		return;
});