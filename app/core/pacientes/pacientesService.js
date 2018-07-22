(function() {
    'use strict';

    angular
        .module('app.services.pacientes', [])
        .factory('pacientesService', pacientesService);

    pacientesService.$inject = ['$http'];

    function pacientesService($http) {
        var url = 'https://localhost:44331/api/pacientes';

        return {
            adicionarOPaciente: adicionarOPaciente,
            obterOsPacientes: obterOsPacientes,
            obterOPacientePeloId: obterOPacientePeloId,
            atualizarOPaciente: atualizarOPaciente,
            removerOPacientePeloId: removerOPacientePeloId
        };

        // POST api/consultas
        function adicionarOPaciente(paciente) {
            return $http.post(url, paciente);
        }

        // GET api/consultas
        function obterOsPacientes() {
            return $http.get(url).then(function(response) {
                return response.data;
            });
        }

        // GET api/consultas/{id}
        function obterOPacientePeloId(id) {
            return $http.get(url + '/' + id).then(function(response) {
                return response.data;
            });
        }

        // PUT api/consultas/{id}
        function atualizarOPaciente(id, paciente) {
            return $http.put(url + '/' + id, paciente);
        }

        // DELETE api/consultas/{id}
        function removerOPacientePeloId(id) {
            return $http.delete(url + '/' + id);
        }
    }
})();
