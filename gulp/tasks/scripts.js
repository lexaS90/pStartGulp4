module.exports = function () {
	$.gulp.task('scripts', function() {
    // Single entry point to browserify 
    return $.gulp.src($.path.src.script)
  		.pipe($.gp.plumber())
      .pipe($.gp.browserify({
				debug : true,
      }))
      .pipe($.gp.uglify())
      .pipe($.gulp.dest($.path.dist.script))
		});
};