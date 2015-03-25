var gulp = require('gulp'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  header = require('gulp-header'),
  rename = require('gulp-rename');

gulp.task('demo', function() {
  return gulp.src(['src/**/*.js'])
    .pipe(concat('moodular.js'))
    .pipe(gulp.dest('dist'))
    .pipe(uglify({mangle: false}))
    .pipe(header([
        '/*',
        '* Moodular',
        '*',
        '*  @author    GouZ <sylvain@gougouzian.fr>',
        '*  @copyright ' + (new Date()).getFullYear(),
        '*  @license   MIT (http://www.opensource.org/licenses/mit-license.php) licensed.',
        '*             GNU GPL (http://www.gnu.org/licenses/gpl.html) licensed.',
        '*/',
        ''
      ].join('\n')))
    .pipe(rename('moodular.min.js'))
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['demo'] , function() {
  gulp.watch('src/**/*.js', ['demo']);
});
