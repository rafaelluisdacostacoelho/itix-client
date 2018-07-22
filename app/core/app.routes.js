(function() {
    'use strict';

    angular.module('app').config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider'];

    function config($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.when('', '/pacientes/list');
        $urlRouterProvider.when('/', '/pacientes/list');
        $urlRouterProvider.when('/pacientes', '/pacientes/list');
        $urlRouterProvider.when('/pacientes/', '/pacientes/list');
        $urlRouterProvider.when('/consultas', '/consultas/list');
        $urlRouterProvider.when('/consultas/', '/consultas/list');
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('root', {
                abstract: true,
                url: '/',
                data: {
                    title: 'Principal',
                    breadcrumb: 'Principal'
                },
                views: {
                    content: {
                        template: 'Escolha uma opção do painel de navegação...'
                    },
                    navigation: {
                        templateUrl: 'core/navigation/navigationView.html',
                        controller: 'NavigationController',
                        controllerAs: 'vm'
                    },
                    footer: {
                        templateUrl: 'core/navigation/footerView.html',
                        controller: 'FooterController',
                        controllerAs: 'vm'
                    }
                }
            })

            // Pacientes
            .state('root.pacientes', {
                abstract: true,
                url: 'pacientes',
                data: {
                    title: 'Pacientes'
                }
            })
            .state('root.pacientes.list', {
                url: '/list',
                data: {
                    title: 'Lista de pacientes'
                },
                views: {
                    'content@': {
                        templateUrl: 'core/pacientes/listView.html',
                        controller: 'ListaDePacientesController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('root.pacientes.new', {
                url: '/new',
                data: {
                    title: 'Novo Paciente'
                },
                views: {
                    'content@': {
                        templateUrl: 'core/pacientes/newView.html',
                        controller: 'NovoPacienteController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('root.pacientes.paciente', {
                abstract: true,
                url: '/:pacienteId'
            })
            .state('root.pacientes.paciente.details', {
                url: '/details',
                data: {
                    title: 'Detalhes do Paciente'
                },
                views: {
                    'content@': {
                        templateUrl: 'core/pacientes/detailsView.html',
                        controller: 'DetalhesDoPacienteController',
                        controllerAs: 'vm'
                    }
                }
            })

            // Consultas
            .state('root.consultas', {
                abstract: true,
                url: 'consultas',
                data: {
                    title: 'Consultas'
                }
            })
            .state('root.consultas.list', {
                url: '/list',
                data: {
                    title: 'Lista de Consultas'
                },
                views: {
                    'content@': {
                        templateUrl: 'core/consultas/listView.html',
                        controller: 'ListaDeConsultasController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('root.consultas.new', {
                url: '/new',
                data: {
                    title: 'Nova Consulta'
                },
                views: {
                    'content@': {
                        templateUrl: 'core/consultas/newView.html',
                        controller: 'NovaConsultaController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('root.consultas.consulta', {
                abstract: true,
                url: '/:consultaId'
            })
            .state('root.consultas.consulta.details', {
                url: '/details',
                data: {
                    title: 'Detalhes da Consulta'
                },
                views: {
                    'content@': {
                        templateUrl: 'core/consultas/detailsView.html',
                        controller: 'DetalhesDaConsultaController',
                        controllerAs: 'vm'
                    }
                }
            });
    }
})();
