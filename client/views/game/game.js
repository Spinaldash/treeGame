'use strict',

angular.module('treeGrow')
.controller('GameCtrl', function($rootScope, $scope, Life, Tree){
  Life.find()
  .then(function(lifeResponse){
    $rootScope.lives = lifeResponse.data.lives;
    console.log('$scope.lives', $scope.lives);

    Tree.find()
    .then(function(treeResponse){
      console.info('treeResponse: ', treeResponse);
      $scope.trees = treeResponse.data.trees;
      console.log('$scope.trees: ', $scope.trees);
    });
  });

  $scope.plantTree = function(){
    Tree.create()
    .then(function(response){
      console.info(response);
    });
  };
});
