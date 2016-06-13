var express     = require('express'),
		router      = express.Router(),
		IndexData   = require('../models/index.data.js'),
		LandingData = require('../models/landing.data.js'),
		ProductData = require('../models/product.data.js');

module.exports = function (app) {

	app.use('/', router);

	router.get('/', function (req, res, next) {
		var data = new IndexData();
		res.render('index', {
			title: data.title,
			// nav: data.nav,
			buttons: data.buttons,
			features: data.features,
			home: data.home
		});
	});

	router.get('/landing-page', function (req, res, next) {
		var data = new LandingData();
		res.render('landing', {
			title: data.title,
			subnav: data.subnav,
			cta: data.cta
		});
	});

	router.get('/spotlight', function (req, res, next) {
		var data = new ProductData();
		res.render('products', {
			title: data.title,
			spotlight: data.spotlight,
			showcase: data.showcase
		});
	});	

};
