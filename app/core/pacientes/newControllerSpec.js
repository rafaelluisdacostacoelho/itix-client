/* global expect */

'use strict';

describe('NovoPacienteController', function() {
    var state,
        pacientesService,
        vm,
        flag = 'success';

    beforeEach(module('app.pacientes.new'));

    beforeEach(inject(function($controller, $state, _pacientesService_) {
        state = $state;
        pacientesService = _pacientesService_;
        spyOn(pacientesService, 'adicionarOPaciente').and.callFake(function() {
            return {
                then: function(successCallback, errorCallback) {
                    if (flag === 'success') successCallback();
                    else errorCallback('Error');
                }
            };
        });
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
