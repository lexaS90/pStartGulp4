global.$ = {
    path: {
        task: require('./gulp/paths/tasks.js'),
        src: {
      		style: 'src/style/app.scss',
      		html: 'src/template/**/*.pug',
            script: 'src/js/app.js',
            image: 'src/img/**/*.*',
        },
        dist: {
      		style: 'dist/assets/css/',
      		html: 'dist/',
            script: 'dist/assets/js/',
            image: 'dist/assets/img/',
        },
        watch: {
        	style: 'src/style/**/*.scss',
        	html: 'src/template/**/*.pug',
            script: 'src/js/**/*.js',
            image: 'src/img/**/*.*',
        }
    },
    del: require('del'),
    gulp: require('gulp'),
    pngquant: require('imagemin-pngquant'),
    browserSync: require('browser-sync').create(),
    gp: require('gulp-load-plugins')(),
    gcmq: require('gulp-group-css-media-queries')
};

$.path.task.forEach(function(taskPath) {
    require(taskPath)();
});

$.gulp.task('default', $.gulp.series(
    'clean',
    $.gulp.parallel(
        'sass',
        'pug',
        'scripts'
    ),
    $.gulp.parallel(
        'watch',
        'serve'
    )
));