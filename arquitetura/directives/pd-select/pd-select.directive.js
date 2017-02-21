(function () {
    'use strict';

    angular.module('pdProva')
        .directive('pdSelect', pdSelect);

    function pdSelect() {
        return {
            restrict: 'E',
            require: '^form',
            templateUrl: 'arquitetura/directives/pd-select/pd-select.html',
            scope: {
                label: '@',
                ngModel: '=',
                ngRequired: '=',
                colspan: '@',
                provider: '=',
                propriedadeValor:'@',
                propriedadeDescricao:'@',
                service:'=',
                lista:'=?',
                controllerLista:'@?',
                entidadePai:'@?'
            },
            link: link
        };

        function link($scope, element, attrs, formCtrl) {
            $scope.formCtrl = formCtrl;

            $scope.propriedadeValor = $scope.propriedadeValor || 'id';
            $scope.propriedadeDescricao = $scope.propriedadeDescricao || 'nome';

            $scope.classColspan = 'col-md-' + ($scope.colspan || 3);

            $scope.inputName = 'pdSelect' + $scope.$id;

            $scope.lista = $scope.lista || [];



        }
    }
})();