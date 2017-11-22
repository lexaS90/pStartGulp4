module.exports = function () {
	$.gulp.task('scripts', function() {
    // Single entry point to browserify 
    return $.gulp.src($.path.src.script)
			.pipe($.gp.sourcemaps.init())
  		.pipe($.gp.plumber())
      .pipe($.gp.browserify({
				debug : true,
      }))
      .pipe($.gulp.dest($.path.dist.script))
      .pipe($.gp.uglify())
      .pipe($.gp.sourcemaps.write('./'))
      .pipe($.gp.rename({ suffix: '.min' }))
      .pipe($.gulp.dest($.path.dist.script))
		});
};