(function() {
    'use strict';

    angular
        .module('app.consultas.new', [
            'ui.router',
            'app.services.consultas',
            'app.services.pacientes'
        ])
        .controller('NovaConsultaController', NovaConsultaController);

    NovaConsultaController.$inject = [
        '$state',
        'consultasService',
        'pacientesService'
    ];

    function NovaConsultaController(
        $state,
        consultasService,
        pacientesService
    ) {
        var vm = this;

        vm.pacientes = [];
        vm.consulta = {};

        vm.adicionarAConsulta = adicionarAConsulta;

        obterOsPacientes();

        function obterOsPacientes() {
            pacientesService.obterOsPacientes().then(function(data) {
                vm.pacientes = data;
            });
        }

        function adicionarAConsulta() {
            vm.consulta.dataInicial = moment(vm.consulta.dataInicial).format(
                'YYYY-MM-DD HH:mm:ss'
            );
            vm.consulta.dataFinal = moment(vm.consulta.dataFinal).format(
                'YYYY-MM-DD HH:mm:ss'
            );
            consultasService.adicionarAConsulta(vm.consulta).then(
                function() {
                    $state.go('root.consultas.list');
                },
                function(error) {
                    toastr.error(error.data);
                }
            );
        }
    }
})();
