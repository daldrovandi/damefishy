/**
 * Created by dald on 30/03/2016.
 */

(function () {
    'use strict';

    class EtsyController {
        constructor($scope, EtsyService) {
            $scope.shop = EtsyService.getShop('dftest');
        }
    }

    angular
        .module('dfApp.etsy', [])
        .component('etsy', {
            templateUrl: 'components/etsy/etsy.html',
            bindings: '=',
            controller: EtsyController
        });
})();