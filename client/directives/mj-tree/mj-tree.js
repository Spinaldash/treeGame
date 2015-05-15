'use strict';

angular.module('mjTreeModule', [])
.directive('mjTree', function(){
  var o = {};

  // A C E M are different directive types
  o.restrict = 'A';
  o.templateUrl = '/directives/mj-tree/mj-tree.html';
  o.scope = {
    height: '=',
    // '=' means its reading the string from the attributes
    health: '=',
    id: '='
  };
   // declaring a scope makes it an isolated scope
  o.link = function($scope, element, attrs){};
  o.controller = function($rootScope, $window, $scope, $timeout, Tree){
    function getState(){
      $scope.state = $window._.find($rootScope.lives, function(life){
        return (life.min <= $scope.height) && (life.max >= $scope.height);
      });
    }

    function getHealthBar(){
      var color;
      var health = $scope.health;

      if(health >= 75){
        color = '#2ad52d';
      } else if(health >= 50){
        color = '#e9df20';
      } else if(health >= 25){
        color = '#f9962c';
      } else if(health >= 0){
        color = '#ee0000';
      }

      $scope.healthBar = {'background-color': color, width: $scope.health + '%'};
    }


    getState();
    getHealthBar();

    $scope.destroy = function(){
      Tree.destroy($scope.id)
      .then(function(response){
        $scope.$emit('treeUprooted', response.data._id);
      });
    };

    $scope.grow = function(){
      Tree.grow($scope.id)
      .then(function(response){
        $scope.height = response.data.height;
        $scope.health = response.data.health;
        getState();
        getHealthBar();
      });
    };
  };

  return o;
});
