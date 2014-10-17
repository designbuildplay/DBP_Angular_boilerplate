/**
 * Exports controller.
 */

"use strict";

var BlankDirective = function($scope) {
  return {
    scope: {},  // use a new isolated scope
    restrict: 'AE',
    replace: 'true',
    template: '<h3>Hello World!! IM A DIRECTIVE MODULE</h3>'
  };
};

// export module
module.exports = BlankDirective;