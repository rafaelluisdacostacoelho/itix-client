/* global expect */

'use strict';

describe('FooterController', function() {
    var controller;

    beforeEach(module('app.navigation.footer'));

    beforeEach(inject(function($controller) {
        controller = $controller('FooterController', {});
    }));

    it('should be defined', function() {
        expect(controller).toBeDefined();
    });
});
