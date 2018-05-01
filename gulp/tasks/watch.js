
module.exports = function() {
    $.gulp.task('watch', function() {
        $.gulp.watch($.path.watch.style, $.gulp.series('sass'));
        $.gulp.watch($.path.watch.html, $.gulp.series('pug'));
        //$.gulp.watch($.path.watch.script, $.gulp.series('scripts'));
        $.gulp.watch($.path.watch.image, $.gulp.series('image'));
        $.gulp.watch($.path.watch.fonts, $.gulp.series('fonts'));
        $.gulp.watch($.path.watch.blocks, $.gulp.series('blocks'));
        $.gulp.watch($.path.watch.svgIcons, $.gulp.series('svg'));
    });
};