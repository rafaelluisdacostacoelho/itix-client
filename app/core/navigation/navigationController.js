(function() {
    'use strict';

    angular
        .module('app.navigation', ['ui.router'])
        .controller('NavigationController', NavigationController);

    NavigationController.$inject = ['$state'];

    function NavigationController($state) {
        var vm = this;

        vm.getClass = getClass;

        function getClass(path) {
            if ($state.current.name.substr(0, path.length) === path) {
                return 'active';
            } else {
                return '';
            }
        }
    }
})();
