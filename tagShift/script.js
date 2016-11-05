angular.module("instantSearch", ['ngResource'])
    .controller("InstantSearchController", function($scope, instagram) {
        $scope.showtooltip = false;
        $scope.searchString = 'click search';

        $scope.hideTooltip = function() {
            $scope.showtooltip = false;
        };

        $scope.toggleTooltip = function(e) {
            e.stopPropagation();
            $scope.showtooltip = !$scope.showtooltip;
        };

        $scope.list_show = 'book';
        $scope.layout = 'list';
        $scope.pics = [];

        instagram.fetchPopular(function(data) {
            $scope.pics = data;
        });

        $scope.items = [{
            url: 'http://tutorialzine.com/2013/07/50-must-have-plugins-for-extending-twitter-bootstrap/',
            title: '50 Must-have plugins for extending Twitter Bootstrap',
            image: 'http://cdn.tutorialzine.com/wp-content/uploads/2013/07/featured_4-100x100.jpg'
        }, {
            url: 'http://tutorialzine.com/2013/08/simple-registration-system-php-mysql/',
            title: 'Making a Super Simple Registration System With PHP and MySQL',
            image: 'http://cdn.tutorialzine.com/wp-content/uploads/2013/08/simple_registration_system-100x100.jpg'
        }, {
            url: 'http://tutorialzine.com/2013/08/slideout-footer-css/',
            title: 'Create a slide-out footer with this neat z-index trick',
            image: 'http://cdn.tutorialzine.com/wp-content/uploads/2013/08/slide-out-footer-100x100.jpg'
        }, {
            url: 'http://tutorialzine.com/2013/06/digital-clock/',
            title: 'How to Make a Digital Clock with jQuery and CSS3',
            image: 'http://cdn.tutorialzine.com/wp-content/uploads/2013/06/digital_clock-100x100.jpg'
        }, {
            url: 'http://tutorialzine.com/2013/05/diagonal-fade-gallery/',
            title: 'Smooth Diagonal Fade Gallery with CSS3 Transitions',
            image: 'http://cdn.tutorialzine.com/wp-content/uploads/2013/05/featured-100x100.jpg'
        }, {
            url: 'http://tutorialzine.com/2013/05/mini-ajax-file-upload-form/',
            title: 'Mini AJAX File Upload Form',
            image: 'http://cdn.tutorialzine.com/wp-content/uploads/2013/05/ajax-file-upload-form-100x100.jpg'
        }, {
            url: 'http://tutorialzine.com/2013/04/services-chooser-backbone-js/',
            title: 'Your First Backbone.js App – Service Chooser',
            image: 'http://cdn.tutorialzine.com/wp-content/uploads/2013/04/service_chooser_form-100x100.jpg'
        }];

        $scope.services = [{
            name: 'Web Development',
            price: 300,
            active: true
        }, {
            name: 'Design',
            price: 400,
            active: false
        }, {
            name: 'Integration',
            price: 250,
            active: false
        }, {
            name: 'Training',
            price: 220,
            active: false
        }];

        $scope.toggleActive = function(s) {
            s.active = !s.active;
        };

        $scope.total = function() {
            var total = 0;
            angular.forEach($scope.services, function(s) {
                if (s.active) {
                    total += s.price;
                }
            });
            return total;
        };
    })
    .filter('searchFor', function() {
        return function(arr, searchString) {
            if (!searchString) {
                return arr;
            }
            var result = [];
            searchString = searchString.toLowerCase();
            angular.forEach(arr, function(item) {
                if (item.title.toLowerCase().indexOf(searchString) !== -1) {
                    result.push(item);
                }
            });
            return result;
        };
    })
    .factory('instagram', function($resource) {
        return {
            fetchPopular: function(callback) {
                var api = $resource('https://api.instagram.com/v1/media/popular?client_id=:client_id&callback=JSON_CALLBACK', {
                    client_id: '642176ece1e7445e99244cec26f4de1f'
                }, {
                    fetch: { method: 'JSONP' }
                });
                api.fetch(function(response) {
                    callback(response.data);
                });
            }
        }
    })
