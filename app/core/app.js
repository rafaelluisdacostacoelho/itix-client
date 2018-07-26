(function() {
    'use strict';

    angular.module('app', [
        'ui.router',
        'moment-picker',
        'toastr',
        'app.navigation.footer',
        'app.navigation',
        'app.pacientes.new',
        'app.pacientes.details',
        'app.pacientes.list',
        'app.consultas.new',
        'app.consultas.details',
        'app.consultas.list',
        'app.directives.about',
        'app.filters',
        'app.contants'
    ]);
})();
