/**
 * Created by dald on 31/03/2016.
 */

(function () {
    'use strict'

    const API_HOST = 'https://openapi.etsy.com/v2';
    const API_KEY = 'fg84b45z43qexai25bn08w4q';
    const SHOP_ID = '12810272';

    let _http = new WeakMap();

    var _getEtsyUrl = function (uri) {
        if (Array.isArray(uri))
            uri = uri.join('/');

        if (!uri.startsWith('/'))
            uri = '/' + uri;

        return API_HOST + uri + '?api_key=' + API_KEY;
    };

    class EtsyService {
        constructor($http) {
            _http.set(this, $http);
        }

        getActiveListing() {
            return _http.get(this)
                .get(_getEtsyUrl('/listings/active'))
                .then(function (response) {
                    return response.data;
                });
        }

        getShop(shopName) {
            return _http.get(this)
                .get(_getEtsyUrl(['shops', shopName]))
                .then(function (response) {
                    return response.data;
                });
        }

        etsyURI(uri) {
            return _getEtsyUrl(uri);
        }

        static etsyServiceFactory($http) {
            return new EtsyService($http);
        }
    }

    angular
        .module('dfApp.etsy')

        .service('EtsyService', EtsyService);
})();