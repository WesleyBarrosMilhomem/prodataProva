(function () {
    'use strict';

    angular
        .module('pdProva')
        .controller('CadastroBairroControle', CadastroBairroControle);

    /* @ngInject */
    function CadastroBairroControle(BairroService,$stateParams) {
        var vm = this;

        vm.pdService = BairroService.getPdService();

        activate();
        function activate() {
            if ($stateParams.id){
                vm.pdService.cidades = vm.pdService.montarListaController('Cidade');
                vm.pdService.editarRegistro($stateParams.id);
            }
        }
    }

})();

