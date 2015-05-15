'use strict';

angular.module('mjPlagueModule')
.factory('Plague', function($http){
  function Plague(){
  }

  var quantumNumApi = 'https://qrng.anu.edu.au/API/jsonI.php?length=1&type=uint8&callback=JSON_CALLBACK';

  Plague.find = function(){
    return $http.jsonp(quantumNumApi)
  };

  return Plague;
});
