/**
 * Exports controller.
 */

"use strict";

var WelcomeCtrl = function($scope, $interval, $http) {
  console.log("yes controller");
  $scope.testVar = 'We are up and running from a required module!';
  $scope.regularAngular = 'Hello!';
  $scope.name = 'Charlie123pal';
  $scope.monkey = 'Strawberry';
  $scope.ticker = 0;
  $scope.tickerTime = 50;

  TweenLite.to('#navimg', 1.5, {width:400});
  
  // Event listeners :::::::::::::::::::::::::::::::::
  // Listens for view Destory / change
  $scope.$on("$destroy", function() {
       $scope.cleanView();
       console.log("destroy...");
  });

  $http.get('data/nav.json').success(function(data) {
      $scope.navitems = data;
      //$scope.img = $scope.navitems[0].imageUrl;
  });

  // // Angular timer
  var intervalPromise = $interval(function () { myTimer() }, $scope.tickerTime);  // Angular interval
  var myTimer = function(action) {
      console.log("angular private tick");
      $scope.ticker = $scope.ticker + 1;
  };
    
  // // Public functions :::::::::::::::::::::::::::::::::::
   $scope.hitFunc = function(action) {
    console.log("returning.. ", $scope.monkey + " " + action);
    // Effect the ticker counter
    if(action == 'over')$scope.ticker = $scope.ticker + 10;
      else{
        $scope.ticker = $scope.ticker * 2;
        TweenLite.fromTo('#navimg', 1.5, {rotation:0}, {rotation:360});
      }
  };

  // // Clean all listeners on the view :::::::::::::::::::::
  $scope.cleanView = function(){
    $interval.cancel( intervalPromise );
    console.log("view cleaned");
  };
};

// export module
module.exports = WelcomeCtrl;