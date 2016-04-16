/**
 * Created by dald on 31/03/2016.
 */

'use strict';

describe('etsy functionalities tests', function () {

    var $scope, $httpBackend, etsyService, component, $componentController;

    beforeEach(module('dfApp'));
    beforeEach(module('dfApp.etsy'));

    beforeEach(function () {
        var etsyServiceMock = {alert: jasmine.createSpy()};

        module(function ($provide) {
            $provide.value('$window', etsyServiceMock);
        });

        inject(function ($injector, $rootScope, _$componentController_, _$httpBackend_) {
            $scope = $rootScope.$new();
            $httpBackend = _$httpBackend_;
            $componentController = _$componentController_;


            etsyService = $injector.get('EtsyService');
        })
    });

    it('should have etsy component', function () {
        // It's necessary to always pass the scope in the locals, so that the controller instance can be bound to it
        component = $componentController('etsy', {
            $scope: $scope,
            etsyService: etsyService
        });

        expect(component).toBeDefined();
    });

    //it('should have an EtsyService from the controller', () => {
    //    expect(component.etsyService).toBeDefined();
    //});

    it('should have EtsyService defined', inject(function () {
        expect(etsyService).toBeDefined();
        expect(etsyService.getActiveListing).toBeDefined();
    }));

    it('should call EtsyService.getActiveListing', inject(function () {
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
        var uri = etsyService.etsyURI(['shops', 'daldrovandi']);

        expect(uri).toBe('https://openapi.etsy.com/v2/shops/daldrovandi?api_key=fg84b45z43qexai25bn08w4q');

        uri = etsyService.etsyURI('shops/daldrovandi');

        expect(uri).toBe('https://openapi.etsy.com/v2/shops/daldrovandi?api_key=fg84b45z43qexai25bn08w4q');
    });

    it('should call dftest shop', () => {
        var uri = etsyService.etsyURI(['shops', 'dftest']);
        var json = null;

        expect(uri).toBe('https://openapi.etsy.com/v2/shops/dftest?api_key=fg84b45z43qexai25bn08w4q');


        jasmine.getJSONFixtures().fixturesPath = 'base/app/tests/mock-data';
        json = getJSONFixture('dftest.json');

        $httpBackend.whenGET(uri).respond(json);

        etsyService.getShop('dftest').then(function (data) {
            expect(json).toEqual(data);
        });
        $httpBackend.flush();
    });
})
;