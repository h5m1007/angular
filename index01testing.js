'use strict';

describe('InvoiceCntl', function() {
    var $scope;
    beforeEach(angular.mock.module('app'));
    beforeEach(angular.mock.inject(function($rootScope, $controller){
    	$scope = $rootScope.$new();
    	$controller('app', {$scope: scope});
    }));

    it('should show of angular binding', function() {
        expect($scope.qty).toEqual('1');
        // input('qty').enter('2');
        // input('cost').enter('5.00');
        // expect(binding('qty * cost')).toEqual('$10.00');
    });
});
