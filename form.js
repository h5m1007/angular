angular.module('UserInfoModule', [])
    .controller('UserInfoCtrl', ['$scope', function($scope) {
        $scope.userInfo = {
            email: "123456@qq.com",
            password: "123456",
            autoLogin: true
        };
        $scope.getFormData = function() {
            console.log($scope.userInfo);
        };
        $scope.setFormData = function() {
            $scope.userInfo = {
                email: "654321@qq.com",
                password: "654321",
                autoLogin: false
            };
        };
        $scope.resetForm = function() {
            $scope.userInfo = {
                email: "123456@qq.com",
                password: "123456",
                autoLogin: true
            };
        };
    }]);
