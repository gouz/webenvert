var gulp = require('gulp'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  rename = require('gulp-rename');

gulp.task('demo', function() {
  return gulp.src(['src/**/*.js'])
    .pipe(concat('moodular.js'))
    .pipe(gulp.dest('dist'))
    .pipe(uglify({mangle: false}))
    .pipe(rename('moodular.min.js'))
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['demo'] , function() {
  gulp.watch('src/**/*.js', ['demo']);
});
