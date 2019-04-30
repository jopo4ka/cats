var uri = 'mongodb://localhost/cats';       // Настройки подключения к БД
var debug = require('debug')("cats:mongo"); // Дебаг
// Подключение внешних файлов для работы с БД
var mongoose = require("mongoose");
var models = require('./models');
// Подключение к БД
var db = mongoose.connect(uri, { useNewUrlParser: true });//, {useMongoClient:true});
// Добавление новой статической страницы
module.exports.addPage = function(id, mName, mText, mOwner, menu, url){
// Предварительная запись значений в модель данных
	var page = new models.page(
    {
      _id   : id,
      name  : mName,
      text  : mText,
      owner : mOwner,
			'menu': menu,
			'url'	: url
    }
  );
// Сохранение модели в базу
  models.page.findById(id, (err, res)=>{
    if(res == null){
      page.save((err)=>{
        if (err) throw err;
        debug("Сохранена новая страница");
      });
    }else{
      debug("Страница уже существует")
    }
  });
}

module.exports.getPage = function(id, callback){
  models.page.findById(id, (err,res)=>{
    if(res != null){
      callback(res);
    }else{
      debug("Страница не существует");
    }
  });
}
