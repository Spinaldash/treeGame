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
  };

  Tree.grow = function(treeId){
    return $http.put(nodeUrl + '/trees/' + treeId + '/grow');
  };

  Tree.destroy = function(treeId){
    return $http.delete(nodeUrl + '/trees/' + treeId + '/destroy');
  };


  return Tree;
});
