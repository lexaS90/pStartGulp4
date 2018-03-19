// // Получение настроек проекта из projectConfig.json
// let dirs = projectConfig.path.src;

// let lists = blockList;

// // Сообщение, записываемое в стилевой файл
// let styleFileMsg = '/*!*\n * ВНИМАНИЕ! Этот файл генерируется автоматически.\n * Не пишите сюда ничего вручную, все такие правки будут потеряны при следующей компиляции.\n */\n\n';

// // Формирование и запись диспетчера подключений (_blocks.scss)
// let jsImports = styleFileMsg;
// jsImports += 'module.exports = function () {\n';
// lists.js.forEach(function(blockPath) {
//   jsImports += '  require( \''+blockPath+'\')();\n';
// });
// jsImports += '}';
// $.fs.writeFileSync(dirs.srcPath + 'js/_blocks.js', jsImports);


function buildScript(file, watch, uglify) {

  var debug = product ? true : false;
  
  var props = {
    entries: $.path.watch.script,
    debug : debug,
    transform:  []
  };

  // watchify() if watch requested, otherwise run browserify() once 
  var bundler = watch ? $.watchify($.browserify(props)) : $.browserify(props);

  function rebundle() {
    var stream = bundler.bundle();
    return stream
      .on('error', $.gp.notify.onError(
          {
              title: 'Scripts',
          }
      ))
      .pipe($.source(file))
      .pipe(product ? $.buffer() : $.gp.util.noop())
      .pipe(product ? $.gp.uglify() : $.gp.util.noop())
      .pipe($.gp.rename({ suffix: '.min' }))
      .pipe($.gulp.dest($.path.dist.script))
      .pipe($.browserSync.reload({stream: true}));
  }

  // listen for an update and run rebundle
  bundler.on('update', function() {
    rebundle();
    $.gp.util.log('Rebundle...');
  });

  // run it once the first time buildScript is called
  return rebundle();
}

module.exports = function() {
  
      // run once
  $.gulp.task('scripts', function() {
    return buildScript($.path.src.script, true, true);
  });
  
}

