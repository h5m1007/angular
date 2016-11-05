// 'use strict';

(function(win){
	// 配置baseUrl
	// data-baseUrl是额外加入的属性，作用是可以容易在html(0缓存)中对js的url进行修改
	var baseUrl = document.getElementById('main').getAttribute('data-baseurl');

	// 文件依赖
	var config = {
		baseUrl: baseUrl,
		paths: {
			angular: 'libs/angular.min',
			'angular-route': 'libs/angular-route.min',
			text: 'libs/text'	// 用于requirejs导入html类型的依赖
		},
		shim: {
			angular: {
				exports: 'angular'
			},
			'angular-route': {
				deps: ['angular'],
				exports: 'ngRouteModule'
			}
		}
	};

	require.config(config);

	require(['angular', 'router'], function(angular){
		angular.bootstrap(document, ['webapp']);	// 手动启动angular
	})

})(window);