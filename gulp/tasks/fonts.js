module.exports = function() {
	$.gulp.task('fonts', function() {
    return $.gulp.src($.path.src.fonts)
    .pipe($.gulp.dest($.path.dist.fonts))
    .on('end', $.browserSync.reload);
	});
};

