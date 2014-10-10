// This will include ./node_modules/angular/angular.js
// and give us access to the `angular` global object.
require('angular/angular');
require('angular-route/angular-route');


// Create the app
var app = angular.module('dbpAPP', ['ngRoute']).config(['$routeProvider', function($routeProvider) {
	  // Specify routes to load our partials upon the given URLs
	  $routeProvider.when('/view1', {templateUrl: 'partials/view1.html',  controller: require('./controllers/View1ctrl').inject(app), });
	  $routeProvider.when('/view2', {templateUrl: 'partials/view2.html',  controller: require('./controllers/View1ctrl').inject(app) });
	  $routeProvider.when('/view3', {templateUrl: 'partials/view3.html',  controller: require('./controllers/View1ctrl').inject(app) });
	  $routeProvider.when('/view4', {templateUrl: 'partials/view4.html',  controller: require('./controllers/View1ctrl').inject(app) });

	  $routeProvider.otherwise({redirectTo: '/view1'});
}]);