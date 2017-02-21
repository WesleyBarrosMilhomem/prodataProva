(function () {
    'use strict';
    angular.module('pdProva',[
        'ngAnimate',
        'ngMaterial',
        'ngMessages',
        'ui.grid',
        'ui.grid.selection',
        'ui.bootstrap',
        'toastr',
        'ui.router',
        'oc.lazyLoad',
        'LocalStorageModule'
    ]).config(function($mdIconProvider) {
        $mdIconProvider
            .defaultIconSet('app/icons/mdi.svg')
    });
})();