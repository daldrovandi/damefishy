/**
 * Created by dald on 12/04/2016.
 */

(function () {
    'use strict';

    class AboutService {
        constructor() {
        }

        getBody() {
            return 'Lorem ipsum dolor sit amet';
        }

        getContacts() {
            return {
                phone: '+44 00000 000000',
                email: 'name@email.com',
                address: {
                    line1: '0, A long road',
                    line2: '',
                    postcode: 'AB0 0CD',
                    county: '',
                    country: 'United Kingdom'
                }
            }
        }
    }

    angular
        .module('dfApp.about')
        .service('AboutService', AboutService)
})();