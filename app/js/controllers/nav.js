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
      $scope.img = data[0].imageUrl;
  });


  // Event listeners :::::::::::::::::::::::::::::::::
  // Listens for view Destory / change
  $scope.$on("$destroy", function() { 
       $scope.cleanView();
       console.log("destroy...");
  });

  // Clean all listeners on the view :::::::::::::::::::
  $scope.cleanView = function(){
  	//$interval.cancel( intervalPromise );
  	console.log("view 1 cleaned");
  }

};
