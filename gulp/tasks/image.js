module.exports = function () {
    $.gulp.task('image', function() {
        return $.gulp.src($.path.src.image)
        .pipe($.gp.cache($.gp.imagemin({      
            progressive: true,
            interlaced: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [$.pngquant()]
        })))
        .pipe($.gulp.dest($.path.dist.image))           
    });
};