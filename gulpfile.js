var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserify = require('browserify');


gulp.task('default', function() { 
return browserify('./js/index.js') 
.bundle() 
.pipe(source('bundle.js')) 
.pipe(gulp.dest('./js')) 
});