(function (angular) {
    'use strict';
    angular.module('myApp')
        .config(['$stateProvider','$urlRouterProvider',
            function ($stateProvider,$urlRouterProvider) {
                $urlRouterProvider.otherwise("/form");
                $stateProvider
                    .state('form', {
                        url: '/form',
                        controller: 'myformController',
                        templateUrl: 'js/Controllers/Form/form.html'
                })
                    .state('time_picker', {
                       url: '/time-picker',
                       controller: 'TimepickerCtrl',
                       templateUrl: 'js/Controllers/TimePicker/time-picker.html'
                    })

                ;
            }
        ]);
}(angular));
