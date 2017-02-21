(function () {
    'use strict';

    angular
        .module('pdProva')
        .controller('PesquisaBairroControle', PesquisaBairroControle);

    /* @ngInject */
    function PesquisaBairroControle(BairroService) {
        var vm = this;

        vm.pdService = BairroService.getPdService();

    }

})();

