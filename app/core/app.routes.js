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
                    title: 'Pacientes',
                    breadcrumb: 'Pacientes'
                }
            })
            .state('root.pacientes.list', {
                url: '/list',
                data: {
                    title: 'Lista de pacientes',
                    breadcrumb: 'Lista'
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
                    title: 'Novo Paciente',
                    breadcrumb: 'Novo'
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
                url: '/:pacienteId',
                data: {
                    title: '[Nome do Paciente]',
                    breadcrumb: '[Nome do Paciente]'
                }
            })
            .state('root.pacientes.paciente.details', {
                url: '/details',
                data: {
                    title: 'Detalhes do Paciente',
                    breadcrumb: 'Detalhes'
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
                    title: 'Pacientes',
                    breadcrumb: 'Pacientes'
                }
            })
            .state('root.consultas.list', {
                url: '/list',
                data: {
                    title: 'Lista de consultas',
                    breadcrumb: 'Lista'
                },
                views: {
                    'content@': {
                        templateUrl: 'core/consultas/listView.html',
                        controller: 'ListaDePacientesController',
                        controllerAs: 'PLC'
                    }
                }
            })
            .state('root.consultas.new', {
                url: '/new',
                data: {
                    title: 'Novo Paciente',
                    breadcrumb: 'Novo'
                },
                views: {
                    'content@': {
                        templateUrl: 'core/consultas/newView.html',
                        controller: 'NovoPacienteController',
                        controllerAs: 'PNC'
                    }
                }
            });
    }
})();
