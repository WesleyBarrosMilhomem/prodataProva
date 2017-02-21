(function () {
    'use strict';

    angular.module('pdProva')
        .service('CidadeService', CidadeService);

    function CidadeService(PdService, PdAlertService) {

        this.getPdService = getPdService;

        function getPdService() {
            var ps = new PdService('Cidade');

            ps.estados = ps.montarListaController('Estado');

            ps.gridOptions = {
                data: ps.provider,
                enableColumnMenus: false,
                enableRowSelection: true,
                columnDefs: [
                    {name: 'Nome', field: 'nome'},
                    {name: 'Estado', field: 'estado.nome'},
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
                    PdAlertService.showError('Nome do CIDADE deve ser preenchido!')
                    return false;
                }

                if (ps.entidade.estado === undefined || ps.entidade.estado.id === undefined) {
                    PdAlertService.showError('ESTADO deve ser preenchido!')
                    return false;
                }

                for (var x = 0, y = ps.estados.length; x < y; x++) {
                    if (ps.estados[x].id == ps.entidade.estado.id) {
                        ps.entidade.estado.nome = ps.estados[x].nome;
                        break;
                    }
                }

                return true;
            }

            return ps;
        }

    }
})();