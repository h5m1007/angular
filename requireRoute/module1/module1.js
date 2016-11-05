define(['angular'], function(angular){
	return function($scope, $http, $interval){
		$scope.info = 'leo';

		$http.get('module2/tpl.html').success(function(data){
			$scope.info = 'leo peng';
		});

		var i = 0;
		$interval(function(){
			// angular专属的setInterval 使用时需引入$interval
			i++;
			$scope.info = i;
		}, 1000);
	};
});