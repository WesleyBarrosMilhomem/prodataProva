(function () {
    'use strict';

    angular.module('pdProva')
        .config(config);

    function config($stateProvider) {

        const cadastroEstado = {
            name:'cadastroEstado',
            url:'/cadastro-estado/:id',
            templateUrl:'app/views/estado/cadastro-estado.html',
            resolve:{
                deps: function ($ocLazyLoad) {
                    return $ocLazyLoad.load('app/views/estado/cadastro-estado.controller.js');
                }
            }
        };

        const pesquisaEstado = {
            name:'pesquisaEstado',
            url:'/pesquisa-estado',
            templateUrl:'app/views/estado/pesquisa-estado.html',
            resolve:{
                deps: function ($ocLazyLoad) {
                    return $ocLazyLoad.load('app/views/estado/pesquisa-estado.controller.js');
                }
            }
        };

        const cadastroCidade = {
            name:'cadastroCidade',
            url:'/cadastro-cidade/:id',
            templateUrl:'app/views/cidade/cadastro-cidade.html',
            resolve:{
                deps: function ($ocLazyLoad) {
                    return $ocLazyLoad.load('app/views/cidade/cadastro-cidade.controller.js');
                }
            }
        };

        const pesquisaCidade = {
            name:'pesquisaCidade',
            url:'/pesquisa-cidade',
            templateUrl:'app/views/cidade/pesquisa-cidade.html',
            resolve:{
                deps: function ($ocLazyLoad) {
                    return $ocLazyLoad.load('app/views/cidade/pesquisa-cidade.controller.js');
                }
            }
        };

        const cadastroBairro = {
            name:'cadastroBairro',
            url:'/cadastro-bairro/:id',
            templateUrl:'app/views/bairro/cadastro-bairro.html',
            resolve:{
                deps: function ($ocLazyLoad) {
                    return $ocLazyLoad.load('app/views/bairro/cadastro-bairro.controller.js');
                }
            }
        };

        const pesquisaBairro = {
            name:'pesquisaBairro',
            url:'/pesquisa-bairro',
            templateUrl:'app/views/bairro/pesquisa-bairro.html',
            resolve:{
                deps: function ($ocLazyLoad) {
                    return $ocLazyLoad.load('app/views/bairro/pesquisa-bairro.controller.js');
                }
            }
        };

        $stateProvider
            .state('cadastroEstado',cadastroEstado)
            .state('pesquisaEstado',pesquisaEstado)
            .state('cadastroCidade',cadastroCidade)
            .state('pesquisaCidade', pesquisaCidade)
            .state('cadastroBairro', cadastroBairro)
            .state('pesquisaBairro', pesquisaBairro);
    }

})();