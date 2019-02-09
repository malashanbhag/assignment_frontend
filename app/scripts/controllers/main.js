'use strict';

/**
 * @ngdoc function
 * @name assignmentMiniQuoraFrontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the assignmentMiniQuoraFrontendApp
 */
angular.module('assignmentMiniQuoraFrontendApp')
  .controller('MainCtrl', function ($scope,myService,$state) {

    $scope.reply = {};

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
      $scope.selectedIndex = index;
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

    $scope.addNewQuestion = function(){
      let data = {
        'title' : $scope.title,
        'body' : $scope.body,
        'category' : $scope.selectedCategory,
        'user_id' : sessionStorage.getItem('id')
      };
      console.log('New Question ', data);
      myService.newQuestion(data).then(function(result){
        console.log('result ', result);
        //clear form
        $scope.title = '';
        $scope.body = '';
        $scope.selectedCategory = '';
        $state.reload();
      }).catch(function(error){
        console.log('Error while adding new question ',error);
      })
    };

    $scope.addReply = function(index,question){
      console.log('index passed ', index);
      console.log('question_id passed ', question);
      console.log('Reply ', $scope.reply[index]);
      let data = {
        'user_id' : sessionStorage.getItem('id'),
        'question_id' : question.question_id,
        'comment' : $scope.reply[index]
      };
      console.log('reply to ',data)
      myService.addReply(data).then(function(result){
        console.log('Replr result ', result);
        //clear form
        $scope.reply = [];
        $state.reload();
      }).catch(function(error){

      });
    };

    $scope.addVote = function(reply,flag){
      console.log('Reply passed ', reply);
      console.log('Flag passed ', flag);
      let data = {
        'user_id' : sessionStorage.getItem('id'),
        'question_id' : reply.question_id,
        'reply_id' : reply.reply_id,
        'flag' : flag
      };
      console.log('data passed ', data);
      myService.addVote(data).then(function(result){
        console.log('Result ', result);
        $state.reload();
      }).catch(function(error){
        console.log('Error ', error);
      });
    };
    

  });
