'use strict';

angular.module('issueTrackerSystem.users.loginModule', ['ngRoute', 'issueTrackerSystem.services.requester'])

    .config(['$routeProvider', function($routeProvider){
        $routeProvider.when('/login', {
            templateUrl: 'users/login/login.html',
            controller: 'LoginController'
        });
    }])

    .controller('LoginController',[
        '$scope',
        'loginRequester',
        function ($scope, loginRequester) {
            $scope.login = function(){
                var username = $scope.username;
                var password = $scope.password;
                loginRequester.login({username: username, password: password})
                    .then(function(success){
                        console.log(success);
                        //todo
                    })
            }

        }
    ]);