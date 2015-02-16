//(function(){

  var services = function($http){


    var getLibrary = function(){
      return $http.get("/data/arcadeGames.json")
                .then(function(response){
                  return response.data;
                });
    };


    var getGame = function(gamename){
      return $http.get("/data/controls/" + gamename + ".json")
                .then(function(response){
                  return response.data;
                });
    };


    return {
      getLibrary: getLibrary,
      getGame: getGame
    };

  };

  var module = angular.module("ArcadeControls");
  module.factory("services", services);

//}());
