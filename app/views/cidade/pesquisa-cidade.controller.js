(function () {
    'use strict';

    angular
        .module('pdProva')
        .controller('PesquisaCidadeControle', PesquisaCidadeControle);

    /* @ngInject */
    function PesquisaCidadeControle(CidadeService) {
        var vm = this;

        vm.pdService = CidadeService.getPdService();

    }

})();

