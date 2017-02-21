(function () {
    'use strict';

    angular.module('pdProva')
        .service('BairroService', BairroService);

    function BairroService(PdService, PdAlertService) {

        this.getPdService = getPdService;

        function getPdService() {
            var ps = new PdService('Bairro');

            ps.estados = ps.montarListaController('Estado');
            ps.cidades = [];

            ps.gridOptions = {
                data: ps.provider,
                enableColumnMenus: false,
                enableRowSelection: true,
                columnDefs: [
                    {name: 'Nome', field: 'nome'},
                    {name: 'Estado', field: 'estado.nome'},
                    {name: 'Cidade', field: 'cidade.nome'},
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
                    PdAlertService.showError('Nome do Bairro deve ser preenchido!')
                    return false;
                }

                if (ps.entidade.estado === undefined || ps.entidade.estado.id === undefined) {
                    PdAlertService.showError('ESTADO deve ser preenchido!')
                    return false;
                }

                if (ps.entidade.cidade === undefined || ps.entidade.cidade.id === undefined) {
                    PdAlertService.showError('CIDADE deve ser preenchido!')
                    return false;
                }

                for (var x = 0, y = ps.estados.length; x < y; x++) {
                    if (ps.estados[x].id == ps.entidade.estado.id) {
                        ps.entidade.estado.nome = ps.estados[x].nome;
                        break;
                    }
                }

                for (var x = 0, y = ps.cidades.length; x < y; x++) {
                    if (ps.cidades[x].id == ps.entidade.cidade.id) {
                        ps.entidade.cidade.nome = ps.cidades[x].nome;
                        break;
                    }
                }

                return true;
            }

            return ps;
        }

    }
})();