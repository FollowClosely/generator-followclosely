var express     = require('express'),
		router      = express.Router(),
		IndexData   = require('../models/index.data.js'),
		LandingData = require('../models/landing.data.js'),
		SharedData  = require('../models/shared.data.js');

module.exports = function (app) {
	
	app.use('/', router);

	router.get('/', function (req, res, next) {
		var sharedData = new SharedData();
		var data = new IndexData();
		res.render('index', {
			company: sharedData.company,
			social: sharedData.social,
			title: data.title,
			nav: data.nav,
			buttons: data.buttons,
			features: data.features,
			home: data.home
		});
	});

	router.get('/landing-page', function (req, res, next) {
		var sharedData = new SharedData();
		var data = new LandingData();
		res.render('landing', {
			company: sharedData.company,
			social: sharedData.social,
			title: data.title,
			nav: data.nav,
			subnav: data.subnav,
			cta: data.cta
		});
	});

};
