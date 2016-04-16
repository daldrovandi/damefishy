(function () {
    'use strict';

    angular
        .module('dfApp', ['ui.bootstrap', 'ngComponentRouter', 'dfApp.etsy', 'dfApp.about'])

        .config(function($locationProvider) {
            $locationProvider.html5Mode(true);
        })

        .value('$routerRootComponent', 'app')

        .component('app', {
            template: '<ng-outlet></ng-outlet>',
            $routeConfig: [
                {
                    path: '/about',
                    name: 'About',
                    component: 'about'
                },
                {
                    path: '/etsy',
                    name: 'Etsy',
                    component: 'etsy'
                }
            ]
        });
})();
