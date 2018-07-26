(function() {
    'use strict';

    angular
        .module('app.contants', [])
        .constant('APP_AUTHOR', 'Rafael Luis da Costa Coelho')
        .constant('APP_NAME', 'Consultório Itix')
        .constant('APP_VERSION', '1.0.0')
        .constant('ENVIRONMENT', {
            api: {
                url: 'https://localhost:44331/api'
            }
        });
})();
