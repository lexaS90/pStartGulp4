// // Получение настроек проекта из projectConfig.json
// let dirs = projectConfig.path.src;

// let lists = blockList;

// // Сообщение, записываемое в стилевой файл
// let styleFileMsg = '/*!*\n * ВНИМАНИЕ! Этот файл генерируется автоматически.\n * Не пишите сюда ничего вручную, все такие правки будут потеряны при следующей компиляции.\n */\n\n';

// // Формирование и запись диспетчера подключений (_blocks.scss)
// let styleImports = styleFileMsg;
// lists.css.forEach(function(blockPath) {
//   styleImports += '@import \''+blockPath+'\';\n';
// });
// $.fs.writeFileSync(dirs.srcPath + 'style/_blocks.scss', styleImports);


module.exports = function () {
    $.gulp.task('sass', function() {
        return $.gulp.src($.path.src.style)
            .pipe(dev ? $.gp.sourcemaps.init() : $.gp.util.noop())
            
            .pipe($.gp.sassGlob())
            .pipe($.gp.sass())
            .on('error', $.gp.notify.onError({
                title: 'Style'
						}))
            .pipe($.gp.autoprefixer({
                browsers: [
                    'last 15 versions',
                    '> 1%',
                    'ie 8',
                    'Opera 12.1'
                ]
            }))
			.pipe(product ? $.gcmq() : $.gp.util.noop())
			.pipe(product ? $.gulp.dest($.path.dist.style) : $.gp.util.noop())
			.pipe(product ? $.gp.csso() : $.gp.util.noop())			
			.pipe($.gp.rename({ suffix: '.min' }))
            .pipe(dev ? $.gp.sourcemaps.write() : $.gp.util.noop())
            .pipe($.gulp.dest($.path.dist.style))
            .pipe($.browserSync.reload({stream: true}));
    });
};