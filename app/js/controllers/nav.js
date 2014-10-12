// :::::::::::::::::::::::::::::::::::::::::::::::::::
// Exports Controller ::::::::::::::::::::::::::::::::
// :::::::::::::::::::::::::::::::::::::::::::::::::::

exports.inject = function(app) {
  app.controller('NavController', exports.controller);
  return exports.controller;
};

// :::::::::::::::::::::::::::::::::::::::::::::::::::

exports.controller = function NavController($scope, $http) {
  
  $scope.welcome = 'Yo!';
  $scope.name = 'Nav controller';

  $http.get('data/nav.json').success(function(data) {
      $scope.navitems = data;
      $scope.img = $scope.navitems[0].imageUrl;
  });


   // Public function
  $scope.hitFunc = function(action) {
      var imgnum = action-1;
      $scope.img = $scope.navitems[imgnum].imageUrl;
      console.log( "img is ", $scope.img);
  }

  // Event listeners :::::::::::::::::::::::::::::::::
  // Listens for view Destory / change
  $scope.$on("$destroy", function() { 
       $scope.cleanView();
       console.log("outer destroy...");
  });

  // Clean all listeners on the view :::::::::::::::::::
  $scope.cleanView = function(){
  	//$interval.cancel( intervalPromise );
  	console.log("outer view cleaned");
  }

};
