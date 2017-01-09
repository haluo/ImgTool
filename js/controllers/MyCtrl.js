/**
 * Created by JesseZhu on 16/10/25.
 */



var app = angular.module("myApp.myCtrl",[]);


//全局 防止污染rootscope
app.controller("ApplicationController",function($scope,MENUS,$location){
    $scope.urlActive = function (url){
        return url === $location.path();
    };
    $scope.menu = MENUS;
});

app.controller("listCtrl",function($scope){

    $scope.formData = {};

    $scope.getImgs = function () {
        var urls =  $scope.formData.urls;
        var arr = urls.split("\n");
        if(arr.length>0){
            $scope.urlArr = arr;
        }
        console.log(arr.length);

        console.log(arr);
    }
});

