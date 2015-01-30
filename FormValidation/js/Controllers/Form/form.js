/**
 * Created by samco on 8/29/2014.
 */
//'use strict';
angular.module('myApp').controller('myformController',['$scope','$state','$rootScope','$log',
    function($scope,$state,$rootScope,$log){

    $scope.a = {};

        //Time picker Start
      //  $scope.showTime = "<timepicker ng-model="+"mytime"+" " +"ng-change="+"changed()"+" " +"hour-step="+"hstep"+" " +"minute-step="+"mstep"+"></"+"timepicker>";


        $scope.hstep = 1;
        $scope.mstep = 15;
        $scope.mytime = new Date();

       $scope.mytime1 = $scope.mytime.toLocaleTimeString();

//        $rootScope.$watch('time', function(newValue, oldValue) {
//            if(newValue){
//                $scope.mytime = newValue;
//            }else{
//                $rootScope.mytime = new Date(1970, 0, 1, 10, 30);
//            }
//
//        });

        $scope.changed = function () {
            $scope.mytime1 = $scope.mytime.toLocaleTimeString();
            $log.log('Time changed to: ' + $scope.mytime1);
        };
//        $scope.popover = {
//            "title": "Title",
//            "content": "Hello Popover<br />This is a multiline message!",
//            "template": "js/Views/timePicker.tpl.html"
//        };







       // var popoverConfig = "js/Views/timePicker.tpl.html";
//        var popoverConfig = {
////            trigger: POP_OVER_CONFIG.TRIGGER,
////            title: POP_OVER_CONFIG.TITLE,
////            placement: POP_OVER_CONFIG.PLACEMENT,
//            template: "js/Views/timePicker.tpl.html"
//        };
//        var POP_OVER_TRIGGER_SELECTOR =  ".ph-cart-popover-trigger";
//
//        $scope.popover = $scope.popover || $popover(angular.element(POP_OVER_TRIGGER_SELECTOR), popoverConfig);
//       // $scope.popover = popoverConfig;
//$scope.showpop = function(){
//    $scope.popover.show();
//};

        //Time picker End

    $scope.reset= function(){
//        $scope.user = "";
//        $scope.a = "";
        $scope.user = angular.copy($scope.a);

    };
    $scope.save= function(user){
        $scope.a = angular.copy(user);
    };

    $scope.isUnchanged = function(user){
        return angular.equals(user,$scope.a );
    };

    $scope.timepicker = function(){
        $state.go('time_picker');
    };

    $scope.reset();

}])
    .config(function($timepickerProvider) {
        angular.extend($timepickerProvider.defaults, {
            timeFormat: 'hh:mm a',
            modelTimeFormat: 'hh:mm a',
            minuteStep: 15,
            length: 3
        });
    })





    .config(function($popoverProvider) {
    angular.extend($popoverProvider.defaults, {
        animation: 'am-flip-x',
        trigger: 'click',
        placement:'top'
    });
    })

    .directive('timeChanged', function () {
        return {
            restrict: 'A',
//            scope: {
//                myDirective: '='
//            },
            link: function (scope, element, attrs) {
                // set the initial value of the textbox
                element.val(scope.mytime1);
                element.data('old-value', scope.mytime1);

                // detect outside changes and update our input
                scope.$watch('myDirective', function (val) {
                    element.val(scope.mytime1);
                });

                // on blur, update the value in scope
                element.bind('propertychange keyup paste', function (blurEvent) {
                    if (element.data('old-value') != element.val()) {
                        console.log('value changed, new value is: ' + element.val());
                        scope.$apply(function () {
                            scope.mytime1 = element.val();
                            element.data('old-value', element.val());
                        });
                    }
                });
            }
        };
    });

//    .directive('mypopover', function ($compile,$templateCache) {
//
//        var getTemplate = function (contentType) {
//            var template = '';
//            switch (contentType) {
//                case 'user':
//                    template = $templateCache.get("templateId.html");
//                    break;
//            }
//            return template;
//        };
//        return {
//            restrict: "A",
//            link: function (scope, element, attrs) {
//                var popOverContent;
//
//                popOverContent = getTemplate("user");
//
//                var options = {
//                    content: popOverContent,
//                    placement: "right",
//                    html: true,
//                    date: scope.date
//                };
//                (element).popover(options);
//            }
//        };
//    });



//    .provider('$popover', function() {
//
//        var defaults = this.defaults = {
//            animation: 'am-fade',
//            customClass: '',
//            container: false,
//            target: false,
//            placement: 'right',
//            template: 'js/Views/timePicker.tpl.html',
//            contentTemplate: false,
//            trigger: 'click',
//            keyboard: true,
//            html: false,
//            title: '',
//            content: '',
//            delay: 0,
//            autoClose: false
//        };
//
//        this.$get = function($tooltip) {
//
//            function PopoverFactory(element, config) {
//
//                // Common vars
//                var options = angular.extend({}, defaults, config);
//
//                var $popover = $tooltip(element, options);
//
//                // Support scope as string options [/*title, */content]
//                if(options.content) {
//                    $popover.$scope.content = options.content;
//                }
//
//                return $popover;
//
//            }
//
//            return PopoverFactory;
//
//        };
//
//    })
//
//    .directive('bsPopover', function($window, $sce, $popover) {
//
//        var requestAnimationFrame = $window.requestAnimationFrame || $window.setTimeout;
//
//        return {
//            restrict: 'EAC',
//            scope: true,
//            link: function postLink(scope, element, attr) {
//
//                // Directive options
//                var options = {scope: scope};
//                angular.forEach(['template', 'contentTemplate', 'placement', 'container', 'target', 'delay', 'trigger', 'keyboard', 'html', 'animation', 'customClass', 'autoClose', 'id'], function(key) {
//                    if(angular.isDefined(attr[key])) options[key] = attr[key];
//                });
//
//                // Support scope as data-attrs
//                angular.forEach(['title', 'content'], function(key) {
//                    attr[key] && attr.$observe(key, function(newValue, oldValue) {
//                        scope[key] = $sce.trustAsHtml(newValue);
//                        angular.isDefined(oldValue) && requestAnimationFrame(function() {
//                            popover && popover.$applyPlacement();
//                        });
//                    });
//                });
//
//                // Support scope as an object
//                attr.bsPopover && scope.$watch(attr.bsPopover, function(newValue, oldValue) {
//                    if(angular.isObject(newValue)) {
//                        angular.extend(scope, newValue);
//                    } else {
//                        scope.content = newValue;
//                    }
//                    angular.isDefined(oldValue) && requestAnimationFrame(function() {
//                        popover && popover.$applyPlacement();
//                    });
//                }, true);
//
//                // Visibility binding support
//                attr.bsShow && scope.$watch(attr.bsShow, function(newValue, oldValue) {
//                    if(!popover || !angular.isDefined(newValue)) return;
//                    if(angular.isString(newValue)) newValue = !!newValue.match(/true|,?(popover),?/i);
//                    newValue === true ? popover.show() : popover.hide();
//                });
//
//                // Initialize popover
//                var popover = $popover(element, options);
//
//                // Garbage collection
//                scope.$on('$destroy', function() {
//                    if (popover) popover.destroy();
//                    options = null;
//                    popover = null;
//                });
//
//            }
//        };
//
//    })
