(function () {
    'use strict';

    angular
        .module('pdProva')
        .directive('pdInputText', pdInputText);


    function pdInputText() {
        return {
            restrict: 'E',
            require:'^form',
            templateUrl:'arquitetura/directives/pd-input-text/pd-input-text.html',
            link: link,
            scope: {
                label:'@',
                ngModel:'=',
                ngRequired:'=',
                colspan:'@'
            }
        };

        function link($scope, element, attrs, formCtrl) {
            $scope.formCtrl = formCtrl;

            $scope.classColSpan = 'col-md-'+ ($scope.colspan || 3);

            $scope.inputName = 'pdInputText' + $scope.$id;
        }
    }

})();

