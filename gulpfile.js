// global.customFunc = require('./gulp/function');  
global.projectConfig = require('./projectConfig.json');
global.$ = {
  path: {
      task: require('./gulp/paths/tasks.js'),
      src: projectConfig.path.src,
      dist: projectConfig.path.dist,
      watch: projectConfig.path.watch,
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
  fs: require('fs'),  
};
// global.blockList = customFunc.getBlocksList(projectConfig);


/**
 * Check develop type
 */

global.product = false;
global.dev = true;

if(!!$.gp.util.env.production){
    product =  true;
    dev =  false;
}



/**
 * Example page generated
 */

if (dev){
    $.path.src.style.push('src/examples/demo.scss');
    $.path.src.html.push('src/examples/demo.pug');
    $.path.watch.style.push('src/examples/demo.scss');
    $.path.watch.html.push('src/examples/demo.pug');
}



/**
 * Require tasks
 */

$.path.task.forEach(function(taskPath) {
    require(taskPath)();
});



/**
 * Default tasks
 */

$.gulp.task('default', $.gulp.series(
    $.gulp.parallel(
        'clean',
        'blocks',
    ),
    $.gulp.parallel(
        'fonts',
        'image',
        'sass',
        'pug',
        'scripts',
        'svg'
    ),
    $.gulp.parallel(
        'watch',
        'serve'
    )
));