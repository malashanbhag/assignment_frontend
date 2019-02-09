'use strict';

/**
 * @ngdoc service
 * @name assignmentMiniQuoraFrontendApp.myService
 * @description
 * # myService
 * Service in the assignmentMiniQuoraFrontendApp.
 */
angular.module('assignmentMiniQuoraFrontendApp')
  .service('myService', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    var url = 'http://localhost:8088'
    var login = function(data){
      return $http.post(url+'/login', data).then(function(success){
        console.log('Success ', success);
        return success;
      }).catch(function(error){
        console.log('Error ', error);
        return error;
      })
    };

    var getAllCategories = function(){
      return $http.get(url+'/getAllCategories').then(function(success){
        return success;
      }).catch(function(error){
        return error;
      })
    }

    var getQuestions = function(){
      return $http.get(url+'/getAllQuestions/').then(function(success){
        return success;
      }).catch(function(error){
        return error;
      })
    };

    var getAllReplies = function(data){
      return $http.get(url+'/getReplies/'+data.question_id).then(function(success){
        return success;
      }).catch(function(error){
        return error;
      })
    };

    var newQuestion = function(data){
      return $http.post(url+'/newQuestion', data).then(function(success){
        return success;
      }).catch(function(error){
        return error;
      })
    }

    var addReply = function(data){
      return $http.post(url+'/addReply', data).then(function(success){
        return success;
      }).catch(function(error){
        return error;
      })
    }

    var addVote = function(data){
      return $http.post(url+'/addVote', data).then(function(success){
        return success;
      }).catch(function(error){
        return error;
      })
    }

    return{
      login : login,
      getAllCategories : getAllCategories,
      getQuestions : getQuestions,
      getAllReplies : getAllReplies,
      newQuestion : newQuestion,
      addReply : addReply,
      addVote : addVote
    }

  });
