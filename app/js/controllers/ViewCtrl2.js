/**
 * Exports controller.
 */

"use strict";

var ViewCtrl2 = function($scope) {
  console.log("yes controller");
  $scope.testVar = 'We are up and running from a required module!';
  $scope.regularAngular = 'Hello!';
  $scope.name = 'Charlie123pal';
  $scope.monkey = 'Strawberry';

  TweenLite.to('#navimg', 1.5, {width:200});

  // Event listeners :::::::::::::::::::::::::::::::::
  // Listens for view Destory / change
  $scope.$on("$destroy", function() {
       $scope.cleanView();
       console.log("destroy...");
  });

  //Public functions :::::::::::::::::::::::::::::::::::
  $scope.hitFunc = function(action) {
      console.log("returning.. ", $scope.monkey + " " + action);
  };

  // // Clean all listeners on the view :::::::::::::::::::::
  $scope.cleanView = function(){
    console.log("view cleaned");
  };
};

// export module
module.exports = ViewCtrl2;