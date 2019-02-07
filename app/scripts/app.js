'use strict';

/**
 * @ngdoc overview
 * @name assignmentMiniQuoraFrontendApp
 * @description
 * # assignmentMiniQuoraFrontendApp
 *
 * Main module of the application.
 */
angular
  .module('assignmentMiniQuoraFrontendApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])
  .config(function ($stateProvider,$urlRouterProvider) {
  
      var login = {
        name : 'login',
        url : '/login',
        controller : 'LoginCtrl',
        templateUrl : 'views/login.html'
      };

      var home = {
        name : 'home',
        url : '/home',
        controller : 'MainCtrl',
        templateUrl : 'views/main.html',
      };

      // var question = {
      //   name: 'question',
      //   url : '/question',
      //   controller : ''
      // }

      $stateProvider.state(home)
      $stateProvider.state(login)
      
      $urlRouterProvider.otherwise('login')
  });
