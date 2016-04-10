/**
 * Created by dald on 03/04/2016.
 */

(function () {
    'use strict';

    const _apiHost = 'https://openapi.etsy.com/v2';
    const _apiKey = 'fg84b45z43qexai25bn08w4q';
    const _shopID = '12810272';

    angular
        .module('dfApp')
        .constant('CONFIG', {
            API_KEY: _apiKey,
            API_HOST: _apiHost,
            SHOP_ID: _shopID
        });
})();