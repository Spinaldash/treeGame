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
    $scope.state = $window._.find($rootScope.lives, function(life){
      return (life.min <= $scope.height) && (life.max >= $scope.height)
    });
    $scope.grow = function(){
      Tree.grow($scope.id)
      .then(function(response){
        console.log(response);
      });
    };
  };

  return o;
});
