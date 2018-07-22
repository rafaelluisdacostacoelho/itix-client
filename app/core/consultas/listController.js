(function() {
    'use strict';

    angular
        .module('app.consultas.list', ['ngAnimate', 'app.services.consultas'])
        .controller('ListaDeConsultasController', ListaDeConsultasController);

    ListaDeConsultasController.$inject = ['consultasService'];

    function ListaDeConsultasController(consultasService) {
        var vm = this;

        vm.consultas = [];

        obterAsConsultas();

        function obterAsConsultas() {
            return consultasService
                .obterAsConsultas()
                .then(function(consultas) {
                    vm.consultas = consultas;
                });
        }
    }
})();
