/* 
 Created on : Mar 29, 2015, 4:29:24 PM
 Author     : Justin Leach
 */

'use strict';

module.exports = ['$scope', '$auth', function ($scope, $auth) {
        $scope.signup = function () {
            var user = {
                email: $scope.email,
                password: $scope.password
            };

            //Satellizer
            $auth.signup(user)
                    .catch(function (response) {
                        console.log(response.data);
                    });
        };
    }];




