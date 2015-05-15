'use strict',

angular.module('treeGrow')
.controller('GameCtrl', function($rootScope, $scope, $window, Life, Tree){
  Life.find()
  .then(function(lifeResponse){
    $rootScope.lives = lifeResponse.data.lives;

    Tree.find()
    .then(function(treeResponse){
      $scope.trees = treeResponse.data.trees;
    });
  });

  $scope.$on('treeUprooted', function(event, data){
    $window._.remove($scope.trees, function(e){
      return e._id === data;
    });
  });

  $scope.plantTree = function(){
    Tree.create()
    .then(function(response){
      $scope.trees.push(response.data);
    });
  };
});
