/**
 * Created by dald on 13/04/2016.
 */

(function () {
    'use strict';

    angular
        .module('dfApp')
        .directive('contacts', ()=> {
            return {
                restrict: 'E',
                scope: {
                    contacts: '='
                },
                templateUrl: 'contacts.tmp.html'
            }
        })
})();