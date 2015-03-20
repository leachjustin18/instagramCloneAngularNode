/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var angular = require('angular'); 
var angularMessages = require('angular-messages'); 
var angularUIRouter = require('angular-ui-router');

angular
.module('Instagram', ['ngMessages']); 

/*
angular.module('Instagram', ['ngRoute', 'ngMessages'])
        .config(['$routeProvider', function ($routeProvider) {
                //Routes
                $routeProvider
                        .when('/', {
                            templateUrl: 'partials/home/.html',
                            controller: 'HomeCtrl'
                        })
                        .when('/login', {
                            templateUrl: 'partials/login.html',
                            controller: 'LoginCtrl'
                        })
                        .when('/signup', {
                            templateUrl: 'partials/signup.html',
                            controller: 'SignupCtrl'
                        })
                        .when('/photo/:id', {
                            templateUrl: 'partials/detail.html',
                            controller: 'DetailCtrl'
                        })
                        .otherwise('/');

            }]);
*/

