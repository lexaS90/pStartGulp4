module.exports = function () {
    $.gulp.task('image', function() {
        return $.gulp.src($.path.src.image)
        .pipe(product ? $.gp.cache($.gp.imagemin({      
            progressive: true,
            interlaced: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [$.pngquant()]
        })) : $.gp.util.noop())
        .pipe($.gulp.dest($.path.dist.image))
        .on('end', $.browserSync.reload);
    });
};