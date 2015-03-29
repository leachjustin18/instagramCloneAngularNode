/* 
 Created on : Mar 29, 2015, 4:10:16 PM
 Author     : Justin Leach
 */

'use strict';

module.exports = function () {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, element, atts, ctrl) {
            element.on('keydown', function () {
                ctrl.$setValidity('server', true);
            });
        }
    };
};




