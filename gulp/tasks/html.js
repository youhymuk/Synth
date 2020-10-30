'use strict';

module.exports = function() {
  $.gulp.task('html:build', function () {
    return $.gulp.src('./src/**/*.html')
      .pipe($.gulp.dest($.config.root))
      .pipe($.browserSync.stream());
  });
};
