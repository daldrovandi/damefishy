/**
 * Created by dald on 31/03/2016.
 */

'use strict';

fdescribe('etsy functionalities tests', function () {

    var $scope, etsyService;

    beforeEach(module('etsy'));

    beforeEach(inject(function (_EtsyService_, $rootScope) {
        $scope = $rootScope.$new();
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

    it('should call EtsyService.getActivveListing', inject(function(){
        spyOn(etsyService, 'getActiveListing');
        var result = etsyService.getActiveListing();
        expect(etsyService.getActiveListing).toHaveBeenCalled();
    }));
});