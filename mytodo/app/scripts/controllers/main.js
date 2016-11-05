'use strict';

/**
 * @ngdoc function
 * @name mytodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mytodoApp
 */
angular.module('mytodoApp')
  .controller('MainCtrl', function ($scope, localStorageService) {

    var todosInStore = localStorageService.get('todos');
    console.log(todosInStore);

    $scope.todos = todosInStore && todosInStore.split('\n') || [];
    // split('\n') 以换行符分割字符串并返回字符串数组

    $scope.$watch('todos', function(){
        localStorageService.add('todos', $scope.todos.join('\n'));
        // join('\n') 把数组每个元素用换行符连接成一个字符串
    }, true);

    $scope.addTodo = function(){
    	$scope.todos.push($scope.todo);
    	$scope.todo = '';
    };
    $scope.removeTodo = function(index){
    	$scope.todos.splice(index, 1);
    };
  });
