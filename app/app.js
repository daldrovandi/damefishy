(function () {
    'use strict';
    angular
        .module('myApp', [
            'ngComponentRouter',
            'etsy'
            //'myApp.view1',
            //'myApp.view2',
            //'myApp.version'
        ])
        .config(function ($locationProvider) {
            $locationProvider.html5Mode(true);
        })
        .value('$routerRootComponent', 'app')
        .component('app', {
            templateUrl: 'templates/nav.html',
            $routeConfig: [
                {
                    path: '/etsy/',
                    name: 'Etsy',
                    component: 'etsyComponent'
                }
            ]
        });
})();
