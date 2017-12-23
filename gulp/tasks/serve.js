module.exports = function() {
    $.gulp.task('serve', function() {
        $.browserSync.init({
            open: true,
            server: './dist'
        });
        $.browserSync.watch([
         // './dist/assets/css/app.min.css',
      	//	'./dist/assets/js/app.js',
      	//	'./dist/*.html',
      	//	'./dist/assets/img/',
      	//	'./dist/assets/fonts/'
        ], $.browserSync.reload);
    });
};