define(['angular'], function(angular) {
    angular.module('bookStoreCtrls', [])
        .controller('HelloCtrl', ['$scope', function($scope) {
            $scope.greeting = {
                text: 'Hello'
            };
            $scope.pageClass = "hello";
        }])
        .controller('BookListCtrl', ['$scope', function($scope) {
            $scope.books = [
                { title: "《XXX》", author: "xxx" },
                { title: "《XXX(xxx)》", author: "xxx" },
                { title: "《XXX》", author: "xxx" }
            ];
            $scope.pageClass = "list";
        }]);
});
