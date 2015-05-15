'use strict';

angular.module('mjPlagueModule', [])
.directive('mjPlague', function(){
  var o = {};

  o.restrict = 'A';
  o.templateUrl = '/directives/mj-plague/mj-plague.html';
  o.scope = {

  };
  o.link = function(){};
  o.controller = function($rootScope, $window, $scope, Tree, Plague, $http, $interval){
    function choosePlague(){
      console.log('the plague is coming');
      var plagueNum = Math.floor(Math.random() * 4);
      if(plagueNum === 0){
        console.log('Wildfire sweeps the land');
        $rootScope.$broadcast('Wildfire');
      }
      if(plagueNum === 1){
        console.log('Jokulhaups sweep the land');
      }
      if(plagueNum === 2){
        console.log('Pestilence sweeps the land');
      }
      if(plagueNum === 3){
        console.log('Scarab Beetles sweep the land');
      }
    }

    $interval(choosePlague, 2000);
          // Plague.find()
          // .success(function(response){
          //   console.log(response);
            // console.log('were in das plague');
            // console.log('num is: ', response);

    choosePlague();
  };
  return o;
});
