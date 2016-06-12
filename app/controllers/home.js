var express = require('express'),
    router  = express.Router(),
    Article = require('../models/article');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {
  var articles = [new Article(), new Article()];
    res.render('index', {
      title: articles.title,
      url: articles.url
   });
});

router.get('/landing-page', function (req, res, next) {
  // var articles = [new Article(), new Article()];
  res.render('landing', {
    title: 'New Project: Landing Page',
    
  });
});

