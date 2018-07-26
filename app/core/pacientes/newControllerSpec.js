/* global expect */

'use strict';

describe('NovoPacienteController', function() {
    var state, vm;
    beforeEach(
        angular.mock.module(function($provide) {
            $provide.service('pacientesService', function pacientesService() {
                return function adicionarOPaciente(paciente) {
                    return $http.post('assets/data/pacientes.json', paciente);
                };
            });
        })
    );
    beforeEach(module('app.pacientes.new'));
    beforeEach(inject(function($controller, $state, _pacientesService_) {
        state = $state;
        vm = $controller('NovoPacienteController', {
            $state: $state,
            pacientesService: _pacientesService_
        });
    }));

    it('should be defined', function() {
        expect(vm).toBeDefined();
    });
    it('should add a paciente initially empty', function() {
        expect(vm.paciente).toEqual({});
    });
    it('should add new paciente and redirect to pacientes list view', function() {
        vm.paciente.nome = 'Rafael Luis da Costa Coelho';
        vm.paciente.nascimento = '13/09/1988';
        spyOn(state, 'go');
        vm.adicionarOPaciente();
        expect(state.go).toHaveBeenCalledWith('root.pacientes.list');
    });
});
