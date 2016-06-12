var express     = require('express'),
		router      = express.Router(),
		Article     = require('../models/article'),
		IndexData   = require('../models/index.data.js'),
		LandingData = require('../models/landing.data.js');

module.exports = function (app) {
	app.use('/', router);
};

router.get('/', function (req, res, next) {
	var data = new IndexData();
	res.render('index', {
		title: data.title,
		home: data.home
	});
});

router.get('/landing-page', function (req, res, next) {
	var data = new LandingData();
	res.render('landing', {
		title: data.title,
		text: data.text
	});
});

