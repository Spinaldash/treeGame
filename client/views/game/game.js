'use strict';

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

  // litsening for a tree issuing an uproot command
  $scope.$on('treeUprooted', function(event, data){
    $window._.remove($scope.trees, function(e){
      return e._id === data;
    });
  });

  // litsening for the plague
  $scope.$on('Plague', function(event, dataObj){
    console.log('data is:', dataObj);
    Tree.plague(dataObj)
    .then(function(){
      Tree.find()
      .then(function(treeResponse){
        $scope.trees = treeResponse.data.trees;
      });
    });
    // var chances = 1 / 10;
    // var roll = Math.random();
    //
    // console.log('chances are:', chances);
    // console.log('your roll was: ', roll);
    // console.log(data);
    // if(roll < chances){
    //   console.log('This tree succumbed to ' + data.name + ':', $scope.id);
    //   // $timeout($scope.destroy, 4000);
    // }
  });

  $scope.plantTree = function(){
    Tree.create()
    .then(function(response){
      $scope.trees.push(response.data);
    });
  };
});
