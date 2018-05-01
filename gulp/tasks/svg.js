module.exports = function () {
    $.gulp.task('svg', function () {
        return $.gulp.src($.path.src.svgIcons)
            .pipe($.gp.svgmin())
            .pipe($.gp.svgstore())
            .pipe($.gp.rename({ basename: 'svgSprite' }))
            .pipe($.gulp.dest($.path.dist.svgIcons))
		    .on('end', $.browserSync.reload);
    });
}