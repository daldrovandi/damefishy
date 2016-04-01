/**
 * Created by dald on 30/03/2016.
 */

describe('myApp test', function () {
    var $httpBackend;

    beforeEach(module('myApp'));

    beforeEach(inject(function ($injector) {
        $httpBackend = $injector.get('$httpBackend');

        $httpBackend
            .when('GET', 'https://openapi.etsy.com/v2/listings/active?api_key=fg84b45z43qexai25bn08w4q')
            .respond({
                status: 200
            })
    }));

    describe('testing the test', function () {
        it('should work', inject(function ($controller) {
            expect(true).toBe(true);
            //spec body
            //var view1Ctrl = $controller('View1Ctrl');
            //expect(view1Ctrl).toBeDefined();
        }));

        it('should have Etsy Controller', function ($controller) {
            var ctrl = $controller('EtsyController');
            expect(viewctrl1Ctrl).toBeDefined();
        });

        it('should call Etsy API', function () {

        });
    });

});