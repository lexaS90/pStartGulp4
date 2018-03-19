module.exports = {

    /**
 * Вернет объект с обрабатываемыми файлами и папками
 * @param  {object}
 * @return {object}
 */
getBlocksList: function(config){

    let res = {
      'css': [],
      'js': [],
      'img': [],
      'pug': [],
      'blocksDirs': [],
    };
  
    // Обходим массив с блоками проекта
    for (let blockName in config.blocks) {
      var blockPath = config.path.src.srcPath + config.path.src.blocksDirName + '/' + blockName + '/';
      
      if(this.fileExist(blockPath)) {
  
        // Стили
        if(this.fileExist(blockPath + blockName + '.scss')){
          res.css.push(blockPath + blockName + '.scss');
         
        }
        else {
          console.log('---------- Блок ' + blockName + ' указан как используемый, но не имеет scss-файла.');
        }


        // Разметка (Pug)
        if(this.fileExist(blockPath + blockName + '.pug')){
          res.pug.push('../../' + blockPath + '/' + blockName + '.pug');
        }
        else {
          console.log('---------- Блок ' + blockName + ' указан как используемый, но не имеет pug-файла.');
        }

        // Скрипты
        if(this.fileExist(blockPath + blockName + '.js')){
          res.js.push('../../' + blockPath + '/' + blockName + '.js');
        }
        else {
          console.log('---------- Блок ' + blockName + ' указан как используемый, но не имеет js-файла.');
        }
		
	  }
  
    }
  
    return res;
  },

/**
 * Проверка существования файла или папки
 * @param  {string} path      Путь до файла или папки]
 * @return {boolean}
 */
fileExist: function (filepath){
    let flag = true;
    try{
      $.fs.accessSync(filepath, $.fs.F_OK);
    }catch(e){
      flag = false;
    }
    return flag;
  }

}