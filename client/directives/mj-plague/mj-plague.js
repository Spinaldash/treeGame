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
    function getPlague(){
      console.log('the plague is coming');
      // getting a truly random number. Jquery used because angular cant handle the response type
      var url = 'https://qrng.anu.edu.au/API/jsonI.php?length=1&type=uint16';
      $window.jQuery.get(url, function(response){
        var trulyRandomNumber = response.data[0];
        var plagueId = trulyRandomNumber % 4;
        var damage;
        var plagueParams = {};
        switch(plagueId){
          case 0:
            damage = trulyRandomNumber % 25;
            plagueParams = {name: 'Wildfire', damage: damage};
            break;
          case 1:
            damage = trulyRandomNumber % 50;
            plagueParams = {name: 'Jokulhaups', damage: damage};
            break;
          case 2:
            damage = trulyRandomNumber % 15;
            plagueParams = {name: 'Pestilence', damage: damage};
            break;
          case 3:
            damage = trulyRandomNumber % 10;
            plagueParams = {name: 'A beetle swarm', damage: damage};
            break;
        }
        console.log(plagueParams.name, 'sweeps the land');
        // Spitting the plague to the trees
        $scope.$emit('Plague', plagueParams);
      });
    }
    $interval(getPlague, 2000);
  };
  return o;
});
