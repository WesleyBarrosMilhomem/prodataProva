(function () {
    'use strict';

    angular.module('pdProva')
        .service('PdService', PdService);

    function PdService(PdStorageService, PdAlertService, RoteadorService) {
        return function (controller) {
            var self = this;

            self.controller = controller;

            self.entidade = {};
            self.provider = [];
            self.listaController = [];

///            self.metodoSalvar = 'salvar';
///            self.metodoExcluir = 'excluir';
///            self.metodoPesquisar = 'pesquisar';

            self.salvar = salvar;
            self.excluir = excluir;
            self.limpar = limpar;
            self.pesquisar = pesquisar;
            self.editarRegistro = editarRegistro;
            self.montarProvider = montarProvider;
            self.atualizar = atualizar;
            self.editarItemGrid = editarItemGrid;
            self.selecionarMontarLista = selecionarMontarLista;
            self.excluirItemGrid = excluirItemGrid;
            self.montarListaController = montarListaController;

            montarProvider();

            self.abrir = function () {
                self.popup.aberto = true;
            };

            self.popup = {
                aberto: false
            };

            self.dateOptions = {
                dateDisabled: disabled,
                formatYear: 'yyyy',
                maxDate: new Date(2030, 12, 31),
                minDate: new Date(),
                startingDay: 1
            };

            function disabled(data) {
                var date = data.date,
                    mode = data.mode;
                return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
            }

            function salvar() {
                if (!self.validarAntesSalvar()) {
                    return;
                }
                ;

                montarProvider();
                for (var x = 0, y = self.provider.length; x < y; x++) {
                    if (self.provider[x].nome.trim() === self.entidade.nome.trim()) {
                        PdAlertService.showError(self.controller + ' já foi cadastrado com esse nome!')
                        break;
                    } else if (self.provider[x].id === self.entidade.id) {
                        self.excluirItemGrid(x);
                        montarProvider();
                        break;
                    }
                }

                self.entidade.id = (self.provider.length + 1);
                self.entidade.dataCadastro = new Date();
                self.provider.push(self.entidade);

                atualizar();
                limpar();
                PdAlertService.showSuccess('Estado gravado com sucesso!');
            }

            function excluir() {
                montarProvider();
                self.provider.splice(self.provider.indexOf(self.entidade), 1);
                atualizar();
                limpar();
            }

            function limpar() {
                self.entidade = {};
            }

            function pesquisar() {
                RoteadorService.roteadorSpa('pesquisa' + self.controller);
            }

            function editarRegistro(id) {

                montarProvider()
                for (var x = 0, y = self.provider.length; x < y; x++) {
                    if (self.provider[x].id == id) {
                        self.entidade = self.provider[x];
                        self.entidade.dataCadastro = new Date(self.entidade.dataCadastro);
                    }
                }
            }

            function montarProvider() {
                self.provider = PdStorageService.get(self.controller) || [];
            }

            function montarListaController(controller) {
                return PdStorageService.get(controller) || [];
            }

            function selecionarMontarLista(lista, controller, idEntidadePai, entidadePai) {
                lista.splice(0, lista.length);
                self.listaController = PdStorageService.get(controller) || [];
                for (var x = 0, y = self.listaController.length; x < y; x++) {
                    var obj = self.listaController[x];
                    if (obj[entidadePai.toString().trim()]['id'] == idEntidadePai) {
                        lista.push(self.listaController[x]);
                    }
                }

            }

            function editarItemGrid(index) {
                RoteadorService.roteadorSpaComParametro('cadastro' + self.controller, {id: self.provider[index].id});
            }

            function excluirItemGrid(index) {
                self.provider.splice(index, 1);
                atualizar();
            }

            function atualizar() {
                PdStorageService.set(self.controller, self.provider);
            }

        };
    }
})();