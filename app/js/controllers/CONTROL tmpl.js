// Exports Controller ::::::::::::::::::::::::::::::::
// :::::::::::::::::::::::::::::::::::::::::::::::::::

exports.inject = function(app) {
  app.controller('AboutCtrl', exports.controller);
  return exports.controller;
};

exports.controller = function ControlExample($scope, $interval) {
  
  $scope.regularAngular = 'Hello!';
  $scope.name = 'Charlie123pal';
  $scope.monkey = 'Strawberry';

  // Event listeners :::::::::::::::::::::::::::::::::
  // Listens for view Destory / change
  $scope.$on("$destroy", function() { 
       $scope.cleanView();
       console.log("destroy...");
  });

  // Angular timer
  var intervalPromise = $interval(function () { myTimer() }, 500);  // Angular interval
  var myTimer = function(action) {
	    console.log("angular private tick")
  }
    
  // Public functions :::::::::::::::::::::::::::::::::::
  $scope.hitFunc = function(action) {
    	console.log("returning.. ", $scope.monkey + " " + action);
  }

  // Clean all listeners on the view :::::::::::::::::::::
  $scope.cleanView = function(){
  	$interval.cancel( intervalPromise );
  	console.log("view cleaned");
  }

};
