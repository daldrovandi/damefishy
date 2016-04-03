/**
 * Created by dald on 30/03/2016.
 */

(function () {
    'use strict';

    class EtsyController {
        constructor() {
        }
    }

    angular
        .module('myApp.etsy', [])
        .controller('EtsyController', ['EtsyService',  EtsyController]);
        //.component('etsyComponent', {
        //    templateUrl: 'templates/etsy.html',
        //    controller: EtsyController
        //});
})();