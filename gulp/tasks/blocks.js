const customFunc = require('../function');

module.exports = function() {
    
    $.gulp.task('blocks', function(done) {

        // Получение файла настроек
        let projectConfig = require('../../projectConfig.json');
        delete require.cache[require.resolve('../../projectConfig.json')];
        
        // Получение настроек проекта из projectConfig.json
        let dirs = projectConfig.path.src;

        let lists = customFunc.getBlocksList(projectConfig);

        // Формирование и запись диспетчера подключений (_blocks.scss)

        // Сообщение, записываемое в стилевой файл
        let styleFileMsg = '/*!*\n * ВНИМАНИЕ! Этот файл генерируется автоматически.\n * Не пишите сюда ничего вручную, все такие правки будут потеряны при следующей компиляции.\n */\n\n';
 
        let styleImports = styleFileMsg;
        lists.css.forEach(function(blockPath) {
        styleImports += '@import \''+blockPath+'\';\n';
        });
        $.fs.writeFileSync(dirs.srcPath + 'style/_blocks.scss', styleImports);


        // Формирование и запись диспетчера подключений (_blocks.pug)

        // Сообщение, записываемое в стилевой файл
        let pugFileMsg = '//- ВНИМАНИЕ! Этот файл генерируется автоматически.\n * Не пишите сюда ничего вручную, все такие правки будут потеряны при следующей компиляции.\n\n';


        let pugMixins = pugFileMsg;
        lists.pug.forEach(function(blockPath) {
        pugMixins += 'include '+blockPath+'\n';
        });
        $.fs.writeFileSync(dirs.srcPath + 'template/_blocks.pug', pugMixins);


        // Формирование и запись диспетчера подключений (_blocks.js)

        // Сообщение, записываемое в стилевой файл
        let scriptFileMsg = '/*!*\n * ВНИМАНИЕ! Этот файл генерируется автоматически.\n * Не пишите сюда ничего вручную, все такие правки будут потеряны при следующей компиляции.\n */\n\n';

        // Формирование и запись диспетчера подключений (_blocks.scss)
        let jsImports = scriptFileMsg;
        jsImports += 'module.exports = function () {\n';
        lists.js.forEach(function(blockPath) {
        jsImports += '  require( \''+blockPath+'\')();\n';
        });
        jsImports += '}';
        $.fs.writeFileSync(dirs.srcPath + 'js/_blocks.js', jsImports);



        return done();
    });
    

   
    
    
}