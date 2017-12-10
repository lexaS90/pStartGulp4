global.$ = {
    path: {
        task: require('./gulp/paths/tasks.js'),
        src: {
      		style: 'src/style/app.scss',
      		html: ['src/template/*.pug', '!src/template/_*.pug'],
          script: 'app.js',
          image: 'src/img/**/*.*',
          fonts: 'src/fonts/**/*.*',
        },
        dist: {
      		style: 'dist/assets/css/',
      		html: 'dist/',
          script: 'dist/assets/js/',
          image: 'dist/assets/img/',
          fonts: 'dist/assets/fonts/'
        },
        watch: {
        	style: 'src/style/**/*.scss',
            html: 'src/template/**/*.pug',
          script: 'src/js/app.js',
          image: 'src/img/**/*.*',
          fonts: 'src/fonts/**/*.*',
        }
    },
    del: require('del'),
    gulp: require('gulp'),
    pngquant: require('imagemin-pngquant'),
    browserSync: require('browser-sync').create(),
    gp: require('gulp-load-plugins')(),
    gcmq: require('gulp-group-css-media-queries'),
    watchify: require('watchify'),
    browserify: require('browserify'),
    source: require('vinyl-source-stream'),
    buffer: require('vinyl-buffer'),
};

global.product = false;
global.dev = true;

if(!!$.gp.util.env.production){
    product =  true;
    dev =  false;
}


$.path.task.forEach(function(taskPath) {
    require(taskPath)();
});

$.gulp.task('default', $.gulp.series(
    'clean',
    $.gulp.parallel(
        'fonts',
        'image',
        'sass',
        'pug',
        'scripts'
    ),
    $.gulp.parallel(
        'watch',
        'serve'
    )
));