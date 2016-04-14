'use strict';

// Declare app level module which depends on views, and components
angular.module('issueTrackerSystem', [
    'ngRoute',
    'issueTrackerSystem.users.loginModule',
    'issueTrackerSystem.users.registerModule'
]).
config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/login'});
}]);
