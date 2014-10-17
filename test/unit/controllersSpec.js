'use strict';

// var app = require('../app/js/app');
// require('../app/js/app');

/* jasmine specs for controllers go here */
describe('DbpAPP controllers', function() {

  describe('Nav Controller', function(){

    beforeEach(module('dbpApp'));

    it('should create Menu model with 4 items', inject(function($controller) {
      var scope = {},
          ctrl = $controller('NavController', {$scope:scope});

      //expect(scope.phones[0].name).toBe("Nexus S");
      expect(scope.phones.length).toBe(4);
    }));

  });
});
