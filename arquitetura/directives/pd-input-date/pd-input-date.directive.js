(function () {
    'use strict';

    angular
        .module('pdProva')
        .directive('pdInputDate', pdInputDate);


    function pdInputDate() {
        return {
            restrict: 'E',
            require:'^form',
            templateUrl:'arquitetura/directives/pd-input-date/pd-input-date.html',
            link: link,
            scope: {
                label:'@',
                ngModel:'=',
                ngRequired:'=',
                ngClick:'&',
                colspan:'@',
                service:"="
            }
        };

        function link($scope, element, attrs, formCtrl) {
            $scope.formCtrl = formCtrl;

            $scope.classColSpan = 'col-md-'+ ($scope.colspan || 3);

            $scope.inputName = 'pdDate' + $scope.$id;
        }
    }

})();

