var express = require('express');
var router = express.Router();
var debug = require('debug')("cats:router");

/* GET home page. */
router.get(['/', '/index'], function(req, res, next) {
  res.render('index', { title: 'Express', page: 'index' });
  debug('get index');
});

module.exports = router;
