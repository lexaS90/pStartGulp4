module.exports = function () {
    $.gulp.task('sass', function() {
        return $.gulp.src($.path.src.style)
            .pipe($.gp.sourcemaps.init())
            .pipe($.gp.sass())
            .on('error', $.gp.notify.onError({
                title: 'Style'
						}))
						.pipe($.gp.autoprefixer({
                browsers: [
                    'last 3 version',
                    '> 3%',
                    'ie 9',
                    'Opera 12.1'
                ]
						}))
			.pipe($.gcmq())
			.pipe($.gulp.dest($.path.dist.style))
			.pipe($.gp.csso())
			.pipe($.gp.sourcemaps.write('./'))
			.pipe($.gp.rename({ suffix: '.min' }))
            .pipe($.gulp.dest($.path.dist.style))
    });
};