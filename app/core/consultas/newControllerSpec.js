/* global expect */

'use strict';

describe('NovaConsultaController', function() {
    // var state, consultasService, pacientesService, controller, httpBackend, vm;
    // beforeEach(module('app.consultas.new'));
    // beforeEach(inject(function(
    //     $controller,
    //     $httpBackend,
    //     _consultasService_,
    //     _pacientesService_,
    //     $state
    // ) {
    //     state = $state;
    //     consultasService = _consultasService_;
    //     pacientesService = _pacientesService_;
    //     httpBackend = $httpBackend;
    //     scope = $rootScope.$new();
    //     scope.IC = {};
    //     scope.IC.consultas = [
    //         {
    //             title: 'Date',
    //             done: false,
    //             type: { name: 'Personal', gico: 'heart' },
    //             estimates: 3,
    //             date: '11/11/2015'
    //         },
    //         {
    //             title: 'Gym',
    //             done: false,
    //             type: { name: 'Health', gico: 'tint' },
    //             estimates: 2,
    //             date: '12/11/2015'
    //         },
    //         {
    //             title: 'Homework',
    //             done: false,
    //             type: { name: 'Science', gico: 'book' },
    //             estimates: 4,
    //             date: '14/11/2015'
    //         },
    //         {
    //             title: 'Meeting',
    //             done: false,
    //             type: { name: 'Business', gico: 'usd' },
    //             estimates: 1,
    //             date: '15/11/2015'
    //         }
    //     ];
    //     controller = $controller('NovaConsultaController', {
    //         $state: state
    //     });
    // }));
    // it('should be defined', function() {
    //     expect(controller).toBeDefined();
    // });
    // it('should contain consultas array - HTTP 200', function() {
    //     httpBackend.expectGET('assets/data/consultas.json').respond([
    //         {
    //             name: 'Personal',
    //             gico: 'heart'
    //         }
    //     ]);
    //     httpBackend.flush();
    //     expect(vm.consultas).toEqual([
    //         {
    //             name: 'Personal',
    //             gico: 'heart'
    //         },
    //         {
    //             name: 'Health',
    //             gico: 'tint'
    //         },
    //         {
    //             name: 'Science',
    //             gico: 'book'
    //         },
    //         {
    //             name: 'Business',
    //             gico: 'usd'
    //         },
    //         {
    //             name: 'Home',
    //             gico: 'home'
    //         },
    //         {
    //             name: 'Other',
    //             gico: 'paperclip'
    //         }
    //     ]);
    // });
    // it('should not contain consultas array - HTTP 404', function() {
    //     httpBackend.expectGET('assets/data/consultas.json').respond(404);
    //     httpBackend.flush();
    //     expect(vm.consultas).toEqual([]);
    // });
    // it('should add new todo and redirect to consultas list view', function() {
    //     vm.formData.newTodo = 'New todo';
    //     vm.formData.type = { name: 'Health', gico: 'tint' };
    //     vm.formData.estimates = 2;
    //     vm.formData.date = '01/06/2016';
    //     spyOn(state, 'go');
    //     vm.addTodo();
    //     expect(scope.IC.consultas).toEqual([
    //         {
    //             title: 'Date',
    //             done: false,
    //             type: {
    //                 name: 'Personal',
    //                 gico: 'heart'
    //             },
    //             estimates: 3,
    //             date: '11/11/2015'
    //         },
    //         {
    //             title: 'Gym',
    //             done: false,
    //             type: {
    //                 name: 'Health',
    //                 gico: 'tint'
    //             },
    //             estimates: 2,
    //             date: '12/11/2015'
    //         },
    //         {
    //             title: 'Homework',
    //             done: false,
    //             type: {
    //                 name: 'Science',
    //                 gico: 'book'
    //             },
    //             estimates: 4,
    //             date: '14/11/2015'
    //         },
    //         {
    //             title: 'Meeting',
    //             done: false,
    //             type: {
    //                 name: 'Business',
    //                 gico: 'usd'
    //             },
    //             estimates: 1,
    //             date: '15/11/2015'
    //         },
    //         {
    //             title: 'New todo',
    //             done: false,
    //             type: {
    //                 name: 'Health',
    //                 gico: 'tint'
    //             },
    //             estimates: 2,
    //             date: '01/06/2016'
    //         }
    //     ]);
    //     expect(vm.formData.newTodo).toEqual('');
    //     expect(state.go).toHaveBeenCalledWith('root.consultas.list');
    // });
});
