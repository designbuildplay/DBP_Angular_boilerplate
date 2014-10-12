// Exports Controller ::::::::::::::::::::::::::::::::
// :::::::::::::::::::::::::::::::::::::::::::::::::::

exports.inject = function(app) {
  app.controller('AboutCtrl', exports.controller);
  return exports.controller;
};

exports.controller = function View1ctrl($scope, ) {
  
  $scope.regularAngular = 'Hello!';
  $scope.name = 'View 1';
  $scope.monkey = '';

  // Event listeners :::::::::::::::::::::::::::::::::
  // Listens for view Destory / change
  $scope.$on("$destroy", function() { 
       $scope.cleanView();
       console.log("destroy...");
  });

    
  // Public function
  $scope.hitFunc = function(action) {
    	console.log("returning.. ", $scope.monkey + " " + action);
  }

  // Clean all listeners on the view :::::::::::::::::::
  $scope.cleanView = function(){
  	$interval.cancel( intervalPromise );
  	console.log("view 1 cleaned");
  }

};
