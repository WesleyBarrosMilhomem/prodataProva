(function () {
    'use strict';

    angular
        .module('pdProva')
        .controller('CadastroCidadeControle', CadastroCidadeControle);

    /* @ngInject */
    function CadastroCidadeControle(CidadeService,$stateParams) {
        var vm = this;

        vm.pdService = CidadeService.getPdService();

        activate();
        function activate() {
            if ($stateParams.id){
                vm.pdService.editarRegistro($stateParams.id);
            }
        }
    }

})();

