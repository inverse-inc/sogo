!function(){"use strict";function a(a,b,c,d,e,f){function g(){return i.loginState="authenticating",f.login(i.creds).then(function(a){i.loginState="logged",i.cn=a.cn,c(function(){b.location.href===a.url?b.location.reload(!0):b.location.href=a.url},1e3)},function(a){i.loginState="error",i.errorMessage=a.error}),!1}function h(a){function b(a){this.closeDialog=function(){a.hide()}}e.show({targetEvent:a,templateUrl:"aboutBox.html",controller:b,controllerAs:"about"}),b.$inject=["$mdDialog"]}var i=this;i.creds={username:b.cookieUsername,password:null,rememberLogin:angular.isDefined(b.cookieUsername)&&b.cookieUsername.length>0},i.login=g,i.loginState=!1,i.showAbout=h,i.showLogin=!1,c(function(){i.showLogin=!0},100)}angular.module("SOGo.MainUI",["SOGo.Common","SOGo.Authentication"]),a.$inject=["$scope","$window","$timeout","Dialog","$mdDialog","Authentication"],angular.module("SOGo.MainUI").controller("LoginController",a)}();
//# sourceMappingURL=Main.js.map