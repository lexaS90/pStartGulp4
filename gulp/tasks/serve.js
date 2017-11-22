module.exports = function() {
    $.gulp.task('serve', function() {
        $.browserSync.init({
            open: true,
            server: './dist'
        });
        $.browserSync.watch('./dist', $.browserSync.reload);
    });
};