/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var angular = require('angular');
require('angular-messages');
require('angular-ui-router');
require('satellizer');


angular
        .module('Instagram', [
            'ngMessages', 'ui.router'
        ])

        .config(['$stateProvider', '$urlRouterProvider',
            function ($stateProvider, $urlRouterProvider) {

                $urlRouterProvider.otherwise('/');

                $stateProvider
                        .state('app', {
                            abstract: true,
                            url: '/',
                            templateUrl: 'partials/header.html'
                        })
                        .state('app.home', {
                            url: '',
                            templateUrl: 'partials/home.html'
                        })
                        .state('app.log-in', {
                            url: 'login',
                            templateUrl: 'partials/login.html'
                        })
                        .state('app.sign-up', {
                            url: 'signup',
                            templateUrl: 'partials/signup.html'
                        });
            }
        ]);


require('./controllers');

