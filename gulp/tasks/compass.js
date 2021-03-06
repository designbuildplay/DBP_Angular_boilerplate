var gulp = require('gulp');
var sass = require('gulp-sass');
var handleErrors = require('../util/handleErrors');
var config=require('../config').compass;


var compass = require('gulp-compass');
gulp.task('compass', function() {
  gulp.src(config.src)
  .pipe(compass({
	config_file: './config.rb',
    css: './www/css',
    sass: 'app/scss',
    image: './www/imgs'
  }))
  //.pipe(minifyCSS())
  .pipe(gulp.dest(config.dest));
});