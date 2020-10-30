'use strict';

module.exports = function() {
  $.gulp.task('image:build', function() {
    return $.gulp.src('./src/img/**/*.*')
      .pipe($.gp.imagemin({
        progressive: true,
        use: [$.gp.pngquant()],
        interlaced: true
      }))
      .pipe($.gulp.dest($.config.root + '/assets/img'));
  });
};
