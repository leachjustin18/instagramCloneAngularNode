'use strict';

module.exports = ['$scope', '$window', '$location', '$rootScope', '$autu',
    function ($scope, $window, $location, $rootScope, $autu) {
        $scope.instagramLogin = function () {
            $auth.authenticate('instagram')
                    .then(function (response) {
                        $window.localStorage.currentUser = JSON.stringify(response.date.user);
                        $rootScope.currentUser = JSON.parse($window.localStorage.currentUser);
                    })
                    .catch(function (response) {
                        console.log(response.data);
                    });
        };

        $scope.emailLogin = function () {
            $auth.login({email: $scope.email, password: $scope.password})
                    .then(function (response) {
                        $window.localStorage.curentUser = JSON.stringify(response.data.user);
                        $rootScope.currentUser = JSON.parse($window.localStorage.curentUser);
                    })
                    .catch(function (response) {
                        $scope.errorMessage = {};
                        angular.forEach(response.data.message, function (message, field) {
                            $scope.loginForm[field].$setValidity('server', false);
                            $scope.errorMessage[field] = response.data.message[field];
                        });
                    });
        };

    }];

