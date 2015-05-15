'use strict';

angular.module('mjTreeModule', [])
.directive('mjTree', function(){
  var o = {};

  o.restrict = 'A'; // A C E M are different directive types
  o.templateUrl = '/directives/mj-tree/mj-tree.html';
  o.scope = {
    height: '=', // '=' means its reading the string from the attributes
    health: '=',
    id: '='
  }; //declaring a scope makes it an isolated scope
  o.link = function($scope, element, attrs){};
  o.controller = function($rootScope, $window, $scope, Tree){
    function getState(){
      $scope.state = $window._.find($rootScope.lives, function(life){
        return (life.min <= $scope.height) && (life.max >= $scope.height)
      });
      $scope.$watch('health', function(){
        $scope.healthBarColor = function(){
          if($scope.height >= 75){
            return '#45dd2d';
          }
          else if($scope.height >= 50){
            return '#ecda15';
          }
          else if($scope.height >= 26){
            return '#ec8619';
          }
          else if($scope.height >= 0){
            return '#f82617';
          } 
        }
      });
    }

    getState();

    $scope.grow = function(){
      Tree.grow($scope.id)
      .then(function(response){
        $scope.height = response.data.height;
        $scope.health = response.data.health;
        getState();
        console.log('response.data.health is: ',response.data.health )
        $scope.healthBarColor(response.data.health);
      });
    };
  };

  return o;
});
