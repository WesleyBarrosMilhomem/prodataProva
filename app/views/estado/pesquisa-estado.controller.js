(function () {
    'use strict';

    angular
        .module('pdProva')
        .controller('PesquisaEstadoControle', PesquisaEstadoControle);

    /* @ngInject */
    function PesquisaEstadoControle(EstadoService) {
        var vm = this;

        vm.pdService = EstadoService.getPdService();

    }

})();

