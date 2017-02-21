(function () {
    'use strict';

    angular
        .module('pdProva')
        .service('PdAlertService', PdAlertService);

    /* @ngInject */
    function PdAlertService(toastr) {
        this.name = 'teste';

        this.showSuccess = showSuccess;
        this.showError = showError;

        function showSuccess(mensagem, titulo) {
            titulo = titulo || 'Ok';

            toastr.success(mensagem, titulo);
        }

        function showError(mensagem, titulo) {
            titulo = titulo || 'Erro';

            toastr.error(mensagem, titulo);
        }
    }
})();
