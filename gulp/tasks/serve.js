'use strict';

module.exports = function() {
  $.gulp.task('serve', function() {
    $.browserSync.init({
      server: $.config.root,
      tunnel: $.config.servTunnel
    });

    $.browserSync.watch([$.config.root + '/**/*.*', '!**/*.css'], $.browserSync.reload);
  });
};
