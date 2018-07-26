(function() {
    'use strict';

    angular
        .module('app.pacientes.list', ['ngAnimate', 'app.services.pacientes'])
        .controller('ListaDePacientesController', ListaDePacientesController);

    ListaDePacientesController.$inject = ['pacientesService'];

    function ListaDePacientesController(pacientesService) {
        var vm = this;

        vm.pacientes = [];

        obterOsPacientes();

        function obterOsPacientes() {
            return pacientesService.obterOsPacientes().then(function(data) {
                vm.pacientes = data;
            });
        }
    }
})();
