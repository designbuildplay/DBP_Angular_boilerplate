// This will include ./node_modules/angular/angular.js
// and give us access to the `angular` global object.
// 
require('angular/angular');
require('angular-route/angular-route');
require('angular-module-touch');
require('gsap');

//require controllers -------------------------------------------------------------------------------------------
//
var WelcomeCtrl = require('./controllers/WelcomeCtrl'); // We can use our WelcomeCtrl.js as a module. Rainbows.
var ViewCtrl2 = require('./controllers/ViewCtrl2');
var NavCtrl = require('./controllers/NavCtrl');

var BlankDirect = require('./directives/BlankDirective');

// Create the app. Add Touch and Router modules ------------------------------------------------------------------
// 
var app = angular.module('dbpAPP', ['ngTouch','ngRoute']).config(['$routeProvider', function($routeProvider) {
	// Specify routes to load our partials upon the given URLs
	$routeProvider.when('/view1', {templateUrl: 'partials/view1.html',  controller: ('WelcomeCtrl', ['$scope','$interval', '$http', WelcomeCtrl ]) });
	$routeProvider.when('/view2', {templateUrl: 'partials/view2.html',  controller: ('ViewCtrl2', ['$scope', ViewCtrl2 ])  });
	$routeProvider.when('/view3', {templateUrl: 'partials/view3.html',  controller: ('ViewCtrl2', ['$scope', ViewCtrl2 ])  });
	$routeProvider.when('/view4', {templateUrl: 'partials/view4.html',  controller: ('ViewCtrl2', ['$scope', ViewCtrl2 ])  });
	// default route
	$routeProvider.otherwise({redirectTo: '/view1'});
}]);


// Outter view controller //---------------------------------------------------

app.controller('NavController', ['$scope','$location','$http', NavCtrl ]);

// Directives //---------------------------------------------------

app.directive('welcomeDirect', [BlankDirect]);