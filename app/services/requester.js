angular.module('issueTrackerSystem.services.requester',[])
.factory('loginRequester', ['$http','$q', function loginRequest($http, $q){
    function login(loginData){
        //todo
    }

    return{
        login: login
    }
}])

.factory('registerRequester', ['$http', '$q', function registerRequest($http, $q){
    function register(){
        //todo
    }

    return {
        register: register
    };
}]);