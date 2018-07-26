(function() {
    'use strict';

    angular
        .module('app.pacientes.new', ['ui.router', 'app.services.pacientes'])
        .controller('NovoPacienteController', NovoPacienteController);

    NovoPacienteController.$inject = ['$state', 'pacientesService'];

    function NovoPacienteController($state, pacientesService) {
        var vm = this;

        vm.paciente = {};

        vm.adicionarOPaciente = adicionarOPaciente;

        function adicionarOPaciente() {
            pacientesService.adicionarOPaciente(vm.paciente).then(function() {
                $state.go('root.pacientes.list');
            });
        }
    }
})();
