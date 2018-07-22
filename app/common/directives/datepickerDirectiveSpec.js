/* global expect */

'use strict';

describe('Datepicker directive', function() {
    var date, element, scope;

    beforeEach(module('app.directives.datepicker'));

    it('should put the date in the model', function() {
        return inject(function($compile, $rootScope) {
            scope = $rootScope.$new();
            date = new Date('2018-07-22T00:00:00.000Z');
            element = angular.element(
                "<input data-ng-date-picker='' data-ng-model='x'></input>"
            );
            $compile(element)(scope);
            element.datepicker('setDate', date);
            $.datepicker._selectDate(element);
            expect(scope.x).toEqual('22/07/2018');
        });
    });
});
