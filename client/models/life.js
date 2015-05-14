'use strict';

angular.module('treeGrow')
.factory('Life', function($rootScope, $http, nodeUrl){
  function Life(){
  }

  Life.find = function(){
    return $http.get(nodeUrl + '/lives');
  };

  return Life;
});
