'use strict';

angular.module('issueTrackerSystem.users.registerModule',['issueTrackerSystem.services.requester'])
    .config(['$routeProvider', function($routeProvider){
        $routeProvider.when('/register', {
            templateUrl: 'users/register/register.html',
            controller: 'RegisterController'
        });
    }])

    .controller('RegisterController', [
        '$scope',
        'registerRequester',
        function($scope, registerRequester){
            //todo
        }
    ])