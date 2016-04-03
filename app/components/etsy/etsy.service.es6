/**
 * Created by dald on 31/03/2016.
 */

(function () {
    'use strict'

    const API_HOST = 'https://openapi.etsy.com/v2';
    const API_KEY = 'fg84b45z43qexai25bn08w4q';
    const SHOP_ID = '12810272';

    let _http = new WeakMap();

    class EtsyService {
        constructor($http) {
            _http.set(this, $http);
        }

        _getEtsyUrl(uri) {
            if (Array.isArray(uri))
                uri = uri.join('/');

            if(!uri.startsWith('/'))
                uri = '/' + uri;

            return API_HOST + uri + '?api_key=' + API_KEY;
        }

        getActiveListing() {
            return _http.get(this)
                .get(this._getEtsyUrl('/listings/active'))
                .then(function (response) {
                    return response.data;
                });
        }

        getShop(shopName) {
            return _http.get(this)
                .get(this._getEtsyUrl(['shops', shopName]))
                .then(function (response) {
                    return response.data;
                });
        }

        static etsyServiceFactory($http) {
            return new EtsyService($http);
        }
    }

    angular
        .module('myApp.etsy')
        .factory('EtsyService', EtsyService.etsyServiceFactory);
})();