/**
 * Created by dald on 12/04/2016.
 */

(function () {
    'use strict';

    fdescribe('About Section Tests', () => {
        var $scope, $httpBackend, component, service;

        beforeEach(module('dfApp.about'));
        beforeEach(function () {
            inject(function ($injector, $rootScope, _$componentController_, _$httpBackend_) {
                $scope = $rootScope.$new();
                $httpBackend = _$httpBackend_;
                component = _$componentController_('about', {
                    $scope: $scope
                });

                service = $injector.get('AboutService');
            })
        });

        it('should return about body text', ()=> {
            var body = service.getBody();
            expect(body).toEqual('Lorem ipsum dolor sit amet');
        });

        it('should return the contact object', () => {
            var contact = service.getContacts();
            expect(contact).toBeDefined();
        });

        it('should return a valid contact response', () => {
            jasmine.getJSONFixtures().fixturesPath = 'base/app/tests/mock-data';
            var json = getJSONFixture('contact.json');

            expect(service.getContacts()).toEqual(json);
        });

        it('should return a valid AboutService instance', ()=>{
            expect(component.service).toBeDefined();

            expect(component.service.getBody).toBeDefined();
        });

        it('should return a valid contact response from the component service', ()=>{
            jasmine.getJSONFixtures().fixturesPath = 'base/app/tests/mock-data';
            var json = getJSONFixture('contact.json');

            expect(component.service.getContacts()).toEqual(json);
        });
    });

})();