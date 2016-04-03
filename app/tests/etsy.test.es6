/**
 * Created by dald on 31/03/2016.
 */

'use strict';

describe('etsy functionalities tests', function () {

    var $scope, $httpBackend, etsyService;

    beforeEach(module('myApp.etsy'));

    beforeEach(inject(function (_EtsyService_, $rootScope, _$httpBackend_) {
        $scope = $rootScope.$new();
        $httpBackend = _$httpBackend_;
        etsyService = _EtsyService_;
    }));

    it('should have EtsyController defined', inject(function ($controller) {
        var ctrl = $controller('EtsyController', {
            $scope: $scope
        });
        expect(ctrl).toBeDefined();
    }));

    it('should have EtsyService defined', inject(function () {
        expect(etsyService).toBeDefined();
    }));

    it('should call EtsyService.getActivveListing', inject(function () {
        spyOn(etsyService, 'getActiveListing');
        var result = etsyService.getActiveListing();
        expect(etsyService.getActiveListing).toHaveBeenCalled();
    }));

    it('should return 200 from Etsy API - Active Listing', inject(function () {
        $httpBackend.expectGET('https://openapi.etsy.com/v2/listings/active?api_key=fg84b45z43qexai25bn08w4q').respond('Hi!');
        etsyService.getActiveListing().then(function (data) {
            expect(data).toEqual('Hi!');
        });
        $httpBackend.flush();
    }));

    it('should return a correct Etsy URI if the parameter is an array', ()=> {
        var uri = etsyService._getEtsyUrl(['shops', 'daldrovandi']);

        expect(uri).toBe('https://openapi.etsy.com/v2/shops/daldrovandi?api_key=fg84b45z43qexai25bn08w4q');

        uri = etsyService._getEtsyUrl('shops/daldrovandi');

        expect(uri).toBe('https://openapi.etsy.com/v2/shops/daldrovandi?api_key=fg84b45z43qexai25bn08w4q');
    });
});