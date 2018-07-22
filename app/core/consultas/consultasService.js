(function() {
    'use strict';

    angular
        .module('app.consultasService', [])
        .factory('consultasService', consultasService);

    consultasService.$inject = ['$http', '$log', '$q'];

    function consultasService($http, $log, $q) {
        return { getConsultas: getConsultas };

        function getConsultas() {
            return $http
                .get('assets/data/consultas.json')
                .then(getConsultasComplete)
                .catch(getConsultasFailed);

            function getConsultasComplete(response) {
                return response.data;
            }

            function getConsultasFailed(e) {
                var newMessage = 'XHR Failed for getConsultas.';
                $log.error(newMessage);
                return $q.reject(e);
            }
        }
    }
})();
