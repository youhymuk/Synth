'use strict';

module.exports = function() {
  $.gulp.task('sass', function() {
    return $.gulp.src('./src/style/**/main.scss')
      .pipe($.gp.sourcemaps.init())
      .pipe($.gp.sass()).on('error', $.gp.notify.onError({ title: 'Style' }))
      .pipe($.gp.autoprefixer($.config.autoprefixerConfig))
      .pipe($.gp.csso({level: 2}))
      .pipe($.gp.sourcemaps.write())
      .pipe($.gp.rename({suffix: '.min'}))
      .pipe($.gulp.dest($.config.root + '/css'))
      .pipe($.browserSync.stream());
  })
};
