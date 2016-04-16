/**
 * Created by dald on 12/04/2016.
 */

(function () {
    'use strict';

    class AboutController {
        constructor($scope, AboutService) {
            this.service = AboutService;

            $scope.title = 'About';
            $scope.contacts = this.service.getContacts();
        }
    }

    angular
        .module('dfApp.about', [])
        .component('about', {
            templateUrl: 'components/about/about.tmp.html',
            //bindings: '=',
            controller: AboutController
        });
})();