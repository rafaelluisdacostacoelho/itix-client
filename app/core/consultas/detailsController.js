(function() {
    'use strict';

    angular
        .module('app.consultas.details', [
            'ui.router',
            'app.services.consultas'
        ])
        .controller(
            'DetalhesDaConsultaController',
            DetalhesDaConsultaController
        );

    DetalhesDaConsultaController.$inject = [
        '$stateParams',
        '$state',
        'toastr',
        'consultasService',
        'pacientesService'
    ];

    function DetalhesDaConsultaController(
        $stateParams,
        $state,
        toastr,
        consultasService,
        pacientesService
    ) {
        var vm = this;

        vm.pacientes = [];

        vm.removerAConsultaPeloId = removerAConsultaPeloId;
        vm.atualizarAConsulta = atualizarAConsulta;

        obterAConsultaPeloId();
        obterOsPacientes();

        function obterOsPacientes() {
            return pacientesService.obterOsPacientes().then(function(data) {
                vm.pacientes = data;
            });
        }

        function obterAConsultaPeloId() {
            consultasService
                .obterAConsultaPeloId($stateParams.consultaId)
                .then(function(consulta) {
                    vm.consulta = consulta;
                    vm.dataInicial = moment(vm.consulta.dataInicial).format(
                        'DD/MM/YYYY HH:mm'
                    );
                    vm.dataFinal = moment(vm.consulta.dataFinal).format(
                        'DD/MM/YYYY HH:mm'
                    );
                });
        }
        function atualizarAConsulta() {
            vm.consulta.dataInicial = moment(vm.consulta.dataInicial).format(
                'YYYY-MM-DD HH:mm:ss'
            );
            vm.consulta.dataFinal = moment(vm.consulta.dataFinal).format(
                'YYYY-MM-DD HH:mm:ss'
            );
            consultasService
                .atualizarAConsulta(vm.consulta.id, vm.consulta)
                .then(function() {
                    $state.go('root.consultas.list');
                })
                .catch(function(error) {
                    toastr.error(error.data);
                });
        }

        function removerAConsultaPeloId(consultaId) {
            consultasService
                .removerAConsultaPeloId(consultaId)
                .then(function() {
                    $state.go('root.consultas.list');
                });
        }
    }
})();
