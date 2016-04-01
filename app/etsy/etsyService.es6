/**
 * Created by dald on 31/03/2016.
 */

(function () {
    'use strict'

    const API_HOST = 'https://openapi.etsy.com/v2';
    const API_KEY = 'fg84b45z43qexai25bn08w4q';

    class EtsyService {

        constructor($http) {
        }

        getActiveListing() {
            return $http
                .get(API_HOST + '/listings/active?api_key=' + API_KEY)
                .then(function (response) {
                    return response.data;
                });
        };
    }

    angular
        .module('etsy')
        .factory('EtsyService', EtsyService);
})();