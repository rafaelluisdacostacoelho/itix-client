(function() {
    'use strict';

    angular
        .module('app.pacientes.details', [
            'ui.router',
            'app.services.pacientes'
        ])
        .controller(
            'DetalhesDoPacienteController',
            DetalhesDoPacienteController
        );

    DetalhesDoPacienteController.$inject = [
        '$stateParams',
        '$state',
        'pacientesService'
    ];

    function DetalhesDoPacienteController(
        $stateParams,
        $state,
        pacientesService
    ) {
        var vm = this;

        vm.removerOPacientePeloId = removerOPacientePeloId;
        vm.atualizarOPaciente = atualizarOPaciente;

        obterOPacientePeloId();

        function obterOPacientePeloId() {
            pacientesService
                .obterOPacientePeloId($stateParams.pacienteId)
                .then(function(paciente) {
                    vm.paciente = paciente;
                    vm.nascimento = moment(vm.paciente.nascimento).format(
                        'DD/MM/YYYY'
                    );
                });
        }
        function atualizarOPaciente() {
            pacientesService
                .atualizarOPaciente(vm.paciente.id, vm.paciente)
                .then(function() {
                    $state.go('root.pacientes.list');
                });
        }

        function removerOPacientePeloId(pacienteId) {
            pacientesService
                .removerOPacientePeloId(pacienteId)
                .then(function() {
                    $state.go('root.pacientes.list');
                });
        }
    }
})();
