/* global expect */

'use strict';

describe('NavigationController', function() {
    var scope, state, controller, vm;

    beforeEach(module('app.navigation'));

    beforeEach(inject(function($controller, $rootScope, $state) {
        state = $state;
        state.current.name = 'root.pacientes.list';
        controller = $controller('NavigationController', {
            $state: state
        });
        vm = controller;
    }));

    it('should be defined', function() {
        expect(controller).toBeDefined();
    });

    it('should set active class to current path', function() {
        expect(vm.getClass('root.pacientes.list')).toEqual('active');
    });

    it('should not set active class to other paths', function() {
        expect(vm.getClass('root.consultas.list')).toEqual('');
    });
});
