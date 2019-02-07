'use strict';

/**
 * @ngdoc function
 * @name assignmentMiniQuoraFrontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the assignmentMiniQuoraFrontendApp
 */
angular.module('assignmentMiniQuoraFrontendApp')
  .controller('MainCtrl', function ($scope,myService) {

    myService.getAllCategories().then(function(result){
      if(result.data.status){
        $scope.categories = result.data.data
        console.log('Categories ', $scope.categories);
      }else{
        console.log('No result ', result);
      }
    }).catch(function(error){
      console.log('Error ', error);

    })

    myService.getQuestions().then(function(result){
      console.log('Result from getQuestions ', result);
      $scope.questions = result.data.data;
      console.log('Questions ', $scope.questions);
    }).catch(function(error){
      console.log('Error ', error);
      $scope.questions = [];
    })

    $scope.getAllReplies = function(index, data){
      console.log('In get all reply ', data);
      myService.getAllReplies(data).then(function(result){
        console.log('Result from getAllReplies ', result);
        if(result.data.success){
          $scope.questions[index].reply = result.data.data;
          console.log('Got all replies ', $scope.questions[index]);
          
        }
      }).catch((error)=>{
        console.log('Error from getAllReplies ', error);
      })
    }
    

  });
