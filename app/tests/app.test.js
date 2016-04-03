/**
 * Created by dald on 30/03/2016.
 */

describe('myApp test', function () {
    var CONFIG;

    beforeEach(module('myApp'));

    beforeEach(inject(function ($injector) {
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
    });

});