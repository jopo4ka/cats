var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var pageSchema = new Schema({
  _id     : Number,
  name    : { type: String, default: 'Заголовок' },
  created : { type: Date, default: Date.now },
  updated : { type: Date, default: Date.now },
  text    : { type: String, default: '<p>Большой текст, форматированый текст</p>' },
  owner   : { type: String, default: 'Создатель' },
  menu    : { type: Boolean, default: false},
  url     : { type: String, default: '#' }
});

var topicSchema = new Schema({
  _id     : Number,
  name    : { type: String, default: 'Заголовок' },
  created : { type: Date, default: Date.now },
  updated : { type: Date, default: Date.now },
  text    : { type: String, default: '<p>Большой текст, форматированый текст</p>' },
  owner   : { type: String, default: 'Создатель' },
  menu    : { type: Boolean, default: false},
  url     : { type: String, default: '#' }
});

var Page  = mongoose.model("Page" , pageSchema);
var Topic = mongoose.model("Topic", topicSchema);

module.exports = {page:Page, topic:Topic};
