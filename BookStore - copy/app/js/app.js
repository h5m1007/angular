define(['angularAnimate', 'angularRoute'], function() {
    return angular.module('bookStoreApp', [
            // 依赖注入
            'ngRoute', 'ngAnimate', 'bookStoreCtrls', 'bookStoreFilters',
            'bookStoreServices', 'bookStoreDirectives'
        ])
        .config(function($routeProvider) {
            // $routeProvider 提供路由服务
            $routeProvider.when('/hello', {
                templateUrl: 'tpls/hello.html',
                controller: 'HelloCtrl'
            }).when('/list', {
                templateUrl: 'tpls/bookList.html',
                controller: 'BookListCtrl'
            }).otherwise({
                // 默认路由
                redirectTo: '/hello'
            });
        });
});
