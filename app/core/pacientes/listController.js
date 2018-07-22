(function() {
    'use strict';

    angular
        .module('app.pacientes.list', ['ngAnimate', 'app.services.pacientes'])
        .controller('ListaDePacientesController', ListaDePacientesController);

    ListaDePacientesController.$inject = ['$log', 'pacientesService'];

    function ListaDePacientesController($log, pacientesService) {
        var vm = this;

        vm.pacientes = [];

        retrieve();

        function retrieve() {
            return obterOsPacientes();
        }

        function obterOsPacientes() {
            return pacientesService.obterOsPacientes().then(function(data) {
                vm.pacientes = data;
            });
        }
    }
})();
