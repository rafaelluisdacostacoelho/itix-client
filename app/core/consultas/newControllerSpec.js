/* global expect */

'use strict';

describe('NovaConsultaController', function() {
    var state,
        consultasService,
        pacientesService,
        vm,
        flag = 'success';

    beforeEach(module('app.consultas.new'));

    beforeEach(inject(function(
        $controller,
        $state,
        _consultasService_,
        _pacientesService_
    ) {
        state = $state;
        consultasService = _consultasService_;
        pacientesService = _pacientesService_;

        spyOn(pacientesService, 'obterOsPacientes').and.callFake(function() {
            return {
                then: function(successCallback, errorCallback) {
                    if (flag === 'success') successCallback();
                    else errorCallback('Error');
                }
            };
        });

        spyOn(consultasService, 'adicionarAConsulta').and.callFake(function() {
            return {
                then: function(successCallback, errorCallback) {
                    if (flag === 'success') successCallback();
                    else errorCallback('Error');
                }
            };
        });

        vm = $controller('NovaConsultaController', {
            $state: $state,
            consultasService: _consultasService_,
            pacientesService: _pacientesService_
        });
    }));

    it('should be defined', function() {
        expect(vm).toBeDefined();
    });

    it('should add a consulta  initially empty', function() {
        expect(vm.consulta).toEqual({});
    });

    it('should list pacientes', function() {});

    it('should add new consulta and redirect to consultas list view', function() {
        vm.consulta.pacienteId = 1;
        vm.consulta.dataInicial = moment('13/09/1988').format(
            'YYYY-MM-DD HH:mm:ss'
        );
        vm.consulta.dataFinal = moment('13/09/1988').format(
            'YYYY-MM-DD HH:mm:ss'
        );
        spyOn(state, 'go');
        vm.adicionarAConsulta();
        expect(state.go).toHaveBeenCalledWith('root.consultas.list');
    });
});
