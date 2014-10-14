var gulp = require('gulp');

gulp.task('build', ['browserify', 'compass', 'images', 'markup', 'data', 'templates']);
