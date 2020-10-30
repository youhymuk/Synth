'use strict';

module.exports = function() {
  $.gulp.task('css:vendor', function() {
    return $.gulp.src($.path.cssVendor)
      .pipe($.gp.concatCss('vendor.css'))
			.pipe($.gp.csso())
			.pipe($.gp.rename({suffix: '.min'}))
      .pipe($.gulp.dest($.config.root + '/css'))
  })
};
