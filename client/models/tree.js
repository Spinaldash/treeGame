'use strict';

angular.module('treeGrow')
.factory('Tree', function(nodeUrl, $http){
  function Tree(){
  }

  Tree.create = function(){
    return $http.post(nodeUrl + '/trees');
  };

  Tree.find = function(){
    return $http.get(nodeUrl + '/trees');
  }

  Tree.grow = function(treeId){
    return $http.get(nodeUrl + '/trees/' + treeId + '/grow');
  }

  return Tree;
});