(function() {
    'use strict';

    angular
        .module('app.consultas.new', ['ui.router', 'app.categoriesService'])
        .controller('NovaConsultaController', NovaConsultaController);

    NovaConsultaController.$inject = [
        '$scope',
        '$state',
        '$log',
        'categoriesService'
    ];

    function NovaConsultaController($scope, $state, $log, categoriesService) {
        var vm = this;

        vm.addConsulta = addConsulta;
        vm.categories = [];
        vm.formData = {
            type: vm.categories[0],
            estimates: (vm.estimates = 1)
        };

        retrieve();

        function retrieve() {
            return getCategories().then(function() {
                $log.info('Retrieved Categories');
            });
        }

        function getCategories() {
            return categoriesService.getCategories().then(function(data) {
                vm.categories = data;
                return vm.categories;
            });
        }

        function addConsulta() {
            $scope.IC.consultas.push({
                title: vm.formData.newTodo,
                done: false,
                type: vm.formData.type,
                estimates: vm.formData.estimates,
                date: vm.formData.date
            });
            vm.formData.newTodo = '';
            $state.go('root.consultas.list');
        }
    }
})();
