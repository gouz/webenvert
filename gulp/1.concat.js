var gulp = require('gulp'),
  concat = require('gulp-concat');

gulp.task('demo', function() {
  return gulp.src(['src/**/*.js'])
    .pipe(concat('moodular.js'))
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['demo'] , function() {
  gulp.watch('src/**/*.js', ['demo']);
});
