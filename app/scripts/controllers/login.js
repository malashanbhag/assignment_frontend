'use strict';

/**
 * @ngdoc function
 * @name assignmentMiniQuoraFrontendApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the assignmentMiniQuoraFrontendApp
 */
angular.module('assignmentMiniQuoraFrontendApp')
  .controller('LoginCtrl', function ($scope,myService,$state) {
    $scope.name = '';
    $scope.password = '';
    $scope.loginError = '';

    $scope.login = function(){
      console.log('In login ',$scope.name,$scope.password);
      let data = {
        'name' : $scope.name,
        'password' :  $scope.password
      };
      myService.login(data).then(function(result){
        if(result.data.status){
          console.log('Login Success ', result.data.data)
          //{user_id: 1, name: "Mala", email: "shanbhag.mala9@gmail.com"}
          sessionStorage.setItem('id',result.data.data.user_id);
          sessionStorage.setItem('name',result.data.data.name);
          sessionStorage.setItem('email',result.data.data.email);
          $state.go('home')
        }else{
          $scope.loginError = true;
          console.log('Login Failure ', result);
        }
      }).catch(function(error){
        $scope.loginError = true;
        console.log('Login Error ', error);
      });
    };


  });
