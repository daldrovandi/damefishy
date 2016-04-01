/**
 * Created by dald on 30/03/2016.
 */

(function () {
    'use strict';

    class EtsyController {
        constructor($scope, $http) {
        }
    }

    angular
        .module('etsy', [])
        .controller('EtsyController', ['EtsyService', EtsyController]);
        //.component('etsyComponent', {
        //    templateUrl: 'templates/etsy.html',
        //    controller: EtsyController
        //});
})();