(function () {
    'use strict';

    angular
        .module('pdProva')
        .controller('IndexControle',IndexControle);

    /* @ngInject */
    function IndexControle($mdSidenav,RoteadorService) {
        var vm = this;

        vm.menus = ['Estado','Cidade','Bairro'];
        vm.itens = ['Cadastro','Pesquisa'];

        vm.toggle = buildToggler('left');
        vm.menuItemClick = menuItemClick;
        vm.sair = sair;

        vm.openMenu = function ($mdOpenMenu,ev,index) {
            vm.entidade = vm.menus[index];
            $mdOpenMenu(ev);
        };

        function menuItemClick(index) {
            sair();
            RoteadorService.roteadorSpa(vm.itens[index].toLowerCase()+vm.entidade)
        }

        function buildToggler(componentId) {
            return function() {
                $mdSidenav(componentId).toggle();
            };
        }

        function sair() {
            $mdSidenav('left').close();
        }
    }

})();

