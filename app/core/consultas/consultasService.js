(function() {
    'use strict';

    angular
        .module('app.services.consultas', [])
        .factory('consultasService', consultasService);

    consultasService.$inject = ['$http'];

    function consultasService($http) {
        var url = 'https://localhost:44331/api/consultas';

        return {
            adicionarAConsulta: adicionarAConsulta,
            obterAsConsultas: obterAsConsultas,
            obterAConsultaPeloId: obterAConsultaPeloId,
            atualizarAConsulta: atualizarAConsulta,
            removerAConsultaPeloId: removerAConsultaPeloId
        };

        // POST api/consultas
        function adicionarAConsulta(paciente) {
            return $http.post(url, paciente);
        }

        // GET api/consultas
        function obterAsConsultas() {
            return $http.get(url).then(function(response) {
                return response.data;
            });
        }

        // GET api/consultas/{id}
        function obterAConsultaPeloId(id) {
            return $http.get(url + '/' + id).then(function(response) {
                return response.data;
            });
        }

        // PUT api/consultas/{id}
        function atualizarAConsulta(id, paciente) {
            return $http.put(url + '/' + id, paciente);
        }

        // DELETE api/consultas/{id}
        function removerAConsultaPeloId(id) {
            return $http.delete(url + '/' + id);
        }
    }
})();
