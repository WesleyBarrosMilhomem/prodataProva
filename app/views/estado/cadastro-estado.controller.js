(function () {
    'use strict';

    angular
        .module('pdProva')
        .controller('CadastroEstadoControle', CadastroEstadoControle);

    /* @ngInject */
    function CadastroEstadoControle(EstadoService,$stateParams) {
        var vm = this;

        vm.pdService = EstadoService.getPdService();

        activate();
        function activate() {
            if ($stateParams.id){
                vm.pdService.editarRegistro($stateParams.id);
            }

        }

    }

})();

