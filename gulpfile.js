const gulp    = require('gulp');
const babel   = require('gulp-babel');

gulp.task('default', function() {
  console.log('Listening for changes on src/');
  gulp.watch('src/**/*.js', ['compileBabel']);
});

gulp.task('compileBabel', function() {
  return gulp.src('src/**/*.js')
      .pipe(babel({
        presets: ['es2015'],
      }))
      .pipe(gulp.dest('lib/'));
});
