/* global expect */

'use strict';

describe('DetalhesDoPacienteController', function() {
    var stateParams, state, pacientesService, controller, vm;

    beforeEach(module('app.pacientes.details'));

    beforeEach(inject(function($controller, _pacientesService_, $state) {
        state = $state;
        pacientesService = _pacientesService_;
        stateParams = { mountainId: '1' };
        controller = $controller('DetalhesDoPacienteController', {
            $stateParams: stateParams,
            $state: state
        });
        vm = controller;
    }));

    it('should be defined', function() {
        expect(controller).toBeDefined();
    });

    it('should get mountain with given id', function() {
        expect(vm.mountain).toEqual({
            id: '1',
            mountain: 'Mount Everest',
            metres: 8850,
            country: 'Nepal-China'
        });
    });

    it('should delete element from mountains" list and redirect to mountain"s list view', function() {
        spyOn(state, 'go');
        vm.delete(stateParams.mountainId);
        expect(state.go).toHaveBeenCalledWith('root.mountains.list');
    });
});
