// module.exports = function(config){
//   config.set({

//     basePath : '../',

//     // files : [
//     //   // 'node_modules/angular/angular.js',
//     //   // 'node_modules/angular-route/angular-route.js',
//     //   // 'node_modules/angular-mocks/angular-mocks.js',
//     //   'app/js/**/*.js',
//     //   'test/unit/**/*.js'
//     // ],

//     // autoWatch : true,

//     //  // include browserify first in used frameworks
//     // frameworks: [ 'browserify', 'jasmine' ],

//     // browsers : ['Chrome'],

//     // plugins : [
//     //         'karma-chrome-launcher',
//     //         'karma-firefox-launcher',
//     //         'karma-jasmine',
//     //         'karma-bro'
//     //         ],

//     // // add preprocessor to the files that should be
//     // // processed via browserify
//     // preprocessors: {
//     //   // 'app/js/*.js': [ 'browserify' ]
//     // },

//     // // see what is going on
//     // logLevel: 'LOG_DEBUG',

//     // // add additional browserify configuration properties here
//     // // such as transform and/or debug=true to generate source maps
//     // browserify: {
//     //   debug: true,
//     //   transform: [ 'brfs' ],
//     //   // prebundle: function(bundle) {
//     //   //   // additional configuration, e.g. externals
//     //   //   bundle.external('foobar');
//     //   // }
//     // }


//     frameworks: [ 'jasmine', 'browserify' ],

//     files: [
//       'app/js/**/*.js',
//       'test/unit/**/*.js'
//     ],

//     reporters: [ 'dots' ],

//     preprocessors: {
//       'test/unit/**/*.js': [ 'browserify' ]
//     },

//     browsers: [ 'Chrome' ],

//     logLevel: 'LOG_DEBUG',

//     singleRun: true,
//     autoWatch: false,

//     // browserify configuration
//     browserify: {
//       debug: true,
//       transform: [ 'brfs' ]
//     }

//   });
// };


'use strict';

module.exports = function(karma) {
  karma.set({

    frameworks: [ 'browserify', 'jasmine' ],

    files: [
      // 'vendor/external.js',
      // '../app/js/**',
      'unit/**/*.js'
    ],

    reporters: [ 'dots' ],

    preprocessors: {
      'test/unit/**/*.js': [ 'browserify' ]
    },

    browsers: [ 'Chrome' ],

    plugins : [
            'karma-chrome-launcher',
            //'karma-firefox-launcher',
            'karma-jasmine',
            'karma-bro'
            ],
    //         
    logLevel: 'LOG_DEBUG',

    singleRun: true,
    autoWatch: false,

    // browserify configuration
    browserify: {
      debug: true,
      transform: [ 'brfs' ]
    }
  });
};


