(function() {
    'use strict';

    angular.module('app', [
        'ui.router',
        'app.index',
        'moment-picker',
        'app.navigation.footer',
        'app.navigation.navigation',
        'app.pacientes.new',
        'app.pacientes.details',
        'app.pacientes.list',
        'app.directives.datepicker',
        'app.directives.about',
        'app.filters'
    ]);
})();
