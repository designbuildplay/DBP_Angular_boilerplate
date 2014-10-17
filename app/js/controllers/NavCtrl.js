/**
 * Exports controller.
 */

"use strict";

var NavController = function($scope, $location, $http) {
  
  $scope.welcome = 'Yo!';
  $scope.name = 'Nav controller';

  $http.get('data/nav.json').success(function(data) {
      $scope.navitems = data;
      $scope.img = $scope.navitems[0].imageUrl;
  });


   // Public function //-----------------------------
  $scope.changeView = function(action) {
      var imgnum = action-1;
      $scope.img = $scope.navitems[imgnum].imageUrl;
      console.log( "img is ", $scope.img);
      console.log(action);

      $location.path("view"+action); // path not hash
  };

  $scope.touchFunc = function(action) {
      console.log( "action ", action);
  };

  // Event listeners //------------------------------
  // Listens for view Destory / change
  $scope.$on("$destroy", function() {
       $scope.cleanView();
       console.log("outer destroy...");
  });

  // Clean all listeners on the view //--------------
  $scope.cleanView = function(){
    console.log("outer view cleaned");
  };
};


// export module //---------------------------------
// 
module.exports = NavController;