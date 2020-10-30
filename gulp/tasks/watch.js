'use strict';

module.exports = function() {
  $.gulp.task('watch', function() {
    $.gulp.watch('./src/style/**/*.scss', $.gulp.series('sass'));
    $.gulp.watch('./src/**/*.html', $.gulp.series('html:build'));
    $.gulp.watch('./src/img/**/*.svg', $.gulp.series('svg:build'));
    $.gulp.watch('./src/img/**/*.*', $.gulp.series('image:build'));
  });
};
