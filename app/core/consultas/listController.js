(function() {
    'use strict';

    angular
        .module('app.consultas.list', ['ngAnimate'])

        .controller('TodosListController', TodosListController);

    TodosListController.$inject = ['$scope'];

    function TodosListController($scope) {
        var vm = this;

        vm.deleteCompleted = deleteCompleted;

        function deleteCompleted() {
            $scope.IC.consultas = $scope.IC.consultas.filter(function(item) {
                return !item.done;
            });
        }
    }
})();
