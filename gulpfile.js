global.$ = {
    path: {
        task: require('./gulp/paths/tasks.js'),
        src: {
      		style: 'src/style/app.scss',
      		html: 'src/template/**/*.pug',
            script: 'src/js/app.js',
        },
        dist: {
      		style: 'dist/assets/css/',
      		html: 'dist/',
            script: 'dist/assets/js/',
        },
        watch: {
        	style: 'src/style/**/*.scss',
        	html: 'src/template/**/*.pug',
            script: 'src/js/**/*.js',
        }
    },
    gulp: require('gulp'),
    //del: require('del'),
    //browserSync: require('browser-sync').create(),
    gp: require('gulp-load-plugins')(),
    gcmq: require('gulp-group-css-media-queries')
};

$.path.task.forEach(function(taskPath) {
    require(taskPath)();
});