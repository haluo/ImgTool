"use strict";
var myApp = angular.module('myApp', ['ui.router', 'ngCookies', 'ui.bootstrap','highcharts-ng','myApp.myCtrl', 'myApp.myService', 'myApp.myDirective']);

myApp.run(function ($rootScope,MENUS) {
    $rootScope.$on('$stateChangeStart', function (event, next){
        if(next){
            var url = next.url;
            for(var key in MENUS){
                console.log(key);
                if(url.indexOf(key)!=-1){
                    MENUS[key].isOpen = true;
                }else {
                    MENUS[key].isOpen = false;
                }
            }
        }
    });
});


myApp.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('index');
    $stateProvider.state('index',
        {
            url: '/index',
            template: '<div class="page-content">it is index</div>'
        }
    ).state('list', {
        url: '/base/list',
        controller: 'listCtrl',
        templateUrl: 'tpls/list.html'
    }).state('heihei',
        {
            url: '/other/heihei',
            template: '<div class="page-content">heihei</div>'
        }
    ).state('hehe',
        {
            url: '/other/hehe',
            template: '<div class="page-content">hehe</div>'
        }
    )
}]);








