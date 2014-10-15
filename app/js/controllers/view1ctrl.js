// Exports Controller ::::::::::::::::::::::::::::::::
// :::::::::::::::::::::::::::::::::::::::::::::::::::
require('gsap');

exports.inject = function(app) {
  app.controller('AboutCtrl', exports.controller);
  return exports.controller;
};

exports.controller = function ControlExample($scope, $interval, $http) {
  
  $scope.regularAngular = 'Hello!';
  $scope.name = 'Charlie123pal';
  $scope.monkey = 'Strawberry';
  $scope.ticker = 0;
  $scope.tickerTime = 500;
  
  TweenLite.to('#navimg', 1.5, {width:400});

  // Event listeners :::::::::::::::::::::::::::::::::
  // Listens for view Destory / change
  $scope.$on("$destroy", function() { 
       $scope.cleanView();
       console.log("destroy...");
  });

  $http.get('data/nav.json').success(function(data) {
      $scope.navitems = data;
      $scope.img = $scope.navitems[0].imageUrl;
  });


  // Angular timer
  var intervalPromise = $interval(function () { myTimer() }, $scope.tickerTime);  // Angular interval
  var myTimer = function(action) {
      $scope.ticker = $scope.ticker + 1;
	    console.log("angular private tick");
  };
    
  // Public functions :::::::::::::::::::::::::::::::::::
  $scope.hitFunc = function(action) {
    console.log("returning.. ", $scope.monkey + " " + action);
    // Effect the ticker counter
    if(action == 'over')$scope.ticker = $scope.ticker + 10;
      else{
        $scope.ticker = $scope.ticker * 2;
        TweenLite.fromTo('#navimg', 1.5, {rotation:0}, {rotation:360});
      }
  };

  // Clean all listeners on the view :::::::::::::::::::::
  $scope.cleanView = function(){
  	$interval.cancel( intervalPromise );
  	console.log("view cleaned");
  };

};
