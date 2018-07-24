(function() {
    'use strict';

    angular
        .module('app.directives.about', ['app'])
        .directive('appAbout', appAbout);

    appAbout.$inject = ['APP_NAME', 'APP_VERSION', 'APP_AUTHOR'];

    function appAbout(APP_NAME, APP_VERSION, APP_AUTHOR) {
        return function(scope, element) {
            element.text(
                APP_NAME + ' - Versão ' + APP_VERSION + ' por ' + APP_AUTHOR
            );
        };
    }
})();
