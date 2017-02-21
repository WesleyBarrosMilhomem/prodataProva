(function () {
    'use strict';

    angular
        .module('pdProva')
        .service('RoteadorService', RoteadorService);

    /* @ngInject */
    function RoteadorService($state) {
        this.roteadorSpa = roteadorSpa;
        this.roteadorSpaComParametro = roteadorSpaComParametro;

        function roteadorSpa(state) {
            $state.go(state)
        }

        function roteadorSpaComParametro(state,obj) {
            $state.go(state,{id: obj.id});
        }
    }

})();

