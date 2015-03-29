/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

'use strict'; 

var app = require('angular').module('Instagram');

 app.controller('HomeCtrl', require('./home'));
 app.controller('LoginCtr', require('./login'));

require('./detail'); 
require('./navbar'); 
require('./signup');


