var express = require('express');
var router = express.Router();
var debug = require('debug')('cats:router-about');
var dbUtils = require("./../database/utils");

/* GET users listing. */
/*
router.get('/', function(req, res, next) {
  debug('get about');
  next();
});
*/
router.get('/', function(req, res) {
  dbUtils.getPage(1, (fndRes)=>{
    debug(fndRes);
    res.render('kitten', { title: 'About page', data:fndRes, page: 'kitten' });
  });
});

router.get('/add', function(req, res) {
  dbUtils.addPage(1, "О питомнике",
                     "<p>Здесь должно быть много много текста.</p>" +
                     "<p>Много много много текста.</p>",
                     "Me",
                     true,
                     "/about");
  dbUtils.addPage(2, "Котята",
                     "<p>Здесь должно быть много много текста.</p>" +
                     "<p>Много много много текста.</p>",
                     "Me",
                     true,
                     "/kitten");
  res.render('index', { title: 'Express', page: 'index' });
});
module.exports = router;
