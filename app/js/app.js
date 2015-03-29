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
            'ngMessages', 'ui.router', 'satellizer'
        ])

        .config(['$stateProvider', '$urlRouterProvider', '$authProvider',
            function ($stateProvider, $urlRouterProvider, $authProvider) {
                //Apps routes
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

                //Otherwise go to home page
                $urlRouterProvider.otherwise('/');

                //Oauth for instagram
                $authProvider.loginUrl = 'http://localhost:3000/auth/login';
                $authProvider.signupUrl = 'http://localhost:3000/auth/signup';
                $authProvider.oauth2({
                    name: 'instagram',
                    url: 'http://localhost:3000/auth/instagram',
                    redirectUri: 'http://localhost:9000',
                    clientId: 'fe50fc902383402286414a46c70902c3',
                    requiredUrlParams: ['scope'],
                    scope: ['likes'],
                    scopeDelimiter: '+',
                    authorizationEndpoint: 'https://api.instagram.com/oauth/authorize'
                });
            }
        ]);


require('./controllers');

