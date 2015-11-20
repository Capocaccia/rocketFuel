var gulp = require('gulp');
    livereload = require('gulp-livereload'),

// gulp.task('default', function() {
//   // place code for your default task here
// });

gulp.task('watch', function() {

  // Create LiveReload server
  livereload.listen();

  // Watch any files, reload on change
  gulp.watch(['**']).on('change', livereload.changed);

});
