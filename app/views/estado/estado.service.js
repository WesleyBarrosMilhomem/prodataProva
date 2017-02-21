(function () {
    'use strict';

    angular.module('pdProva')
        .service('EstadoService', EstadoService);

    function EstadoService(PdService, PdAlertService) {

        this.getPdService = getPdService;

        function getPdService() {
            var ps = new PdService('Estado');

            ps.gridOptions = {
                data: ps.provider,
                enableColumnMenus: false,
                enableRowSelection: true,
                columnDefs: [
                    {name: 'Nome', field: 'nome'},
                    {
                        name: 'Data cadastro',
                        field: 'dataCadastro',
                        width: 150,
                        cellTemplate: 'arquitetura/templates/cell-template-date.html'
                    },
                ],
            };

            ps.validarAntesSalvar = validarAntesSalvar;

            function validarAntesSalvar() {

                if (ps.entidade.nome === undefined || ps.entidade.nome.trim() === '') {
                    PdAlertService.showError('Nome do ESTADO deve ser preenchido!')
                    return false;
                }

                return true;
            }

            return ps;
        }

    }
})();