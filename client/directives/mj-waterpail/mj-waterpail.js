'use strict';

angular.module('mjPailModule', [])
.directive('mjWaterpail', function(){
  var o = {};

  // A C E M are different directive types
  o.restrict = 'A';
  o.templateUrl = '/directives/mj-waterpail/mj-waterpail.html';
  o.scope = {
    intensity: '=',
    // '=' means its reading the string from the attributes
    frequency: '=',
  };
   // declaring a scope makes it an isolated scope
  o.link = function($scope, element, attrs){};
  o.controller = function($rootScope, $window, $scope, $timeout, $interval){
    function waterTime(){
      console.log('water-time!!! yay!');
    }

    $interval(waterTime, 2000);
  };

  return o;
});
