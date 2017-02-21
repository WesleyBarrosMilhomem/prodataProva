(function () {
    'use strict';

    angular
        .module('pdProva')
        .directive('pdGrid', pdGrid);


    function pdGrid() {
        return {
            restrict: 'E',
            templateUrl:'arquitetura/directives/pd-grid/pd-grid.html',
            scope: {
                service:'=',
                exibeEditar:'=',
                exibeExcluir:'='
            },
            link: link
        };

        function link($scope) {
            if($scope.exibeExcluir){
                $scope.service.gridOptions.columnDefs.push({
                    name: 'Excluir', field: 'excluir', width: 80,
                    cellTemplate: 'arquitetura/templates/cell-template-excluir.html',
                    onClick: $scope.service.excluirItemGrid
                })
            }
            if($scope.exibeEditar){
                $scope.service.gridOptions.columnDefs.push({
                    name: 'Editar', field: 'editar', width: 80,
                    cellTemplate: 'arquitetura/templates/cell-template-editar.html',
                    onClick: $scope.service.editarItemGrid
                })
            }

        }
    }

})();

