(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports={
  'home': {
    'sales': {
      'hero': 'main01.jpg',
      'header': 'SalesOps.',
      'bannerA': 'Download the Checklist &nbsp;&rarr;',
      'bannerB': '10 Tips for a Perfect Sale'
    },
    'dev': {
      'hero': 'main02.jpg',
      'header': 'DevOps.',
      'bannerA': 'Download the Checklist &nbsp;&rarr;',
      'bannerB': '11 Tricks for a Smooth Deploy(ment)'
    },
    'builds': {
      'hero': 'main03.jpg',
      'header': 'Good Builds.',
      'bannerA': 'Download the Checklist &nbsp;&rarr;',
      'bannerB': 'The 12 Secrets of Architecture'
    },
    'sexy': {
      'hero': 'main04.jpg',
      'header': 'Sexy Product.',
      'bannerA': 'Download the Checklist &nbsp;&rarr;',
      'bannerB': '13 Hacks for a Summer Bod'
    }
  },
  'landing': {

  }
}
},{}],2:[function(require,module,exports){
$( function() {
	var imgDir   = './images/',
      data     = require('./model.json'),
			quote1   = 'reviewbg01.jpg',
			quote2   = 'reviewbg02.jpg',
			quote3   = 'reviewbg03.jpg',
			quote4   = 'reviewbg04.jpg',
			quote5   = 'reviewbg05.jpg';

  console.log(data);

	$('#hero-ul a').on('click', function(){
		$('a.active').removeClass('active');
		$(this).addClass('active');
	});

	$('#hero01').on('click', function(e){
		e.preventDefault();

		$('#hero').attr('style',
			'background: url(' + imgDir + data.home.sales.hero + 
			'); background-size: cover; background-position: center center; transition: all 0.4s ease;');
		$('#banner-a').replaceWith('<span id="banner-a" class="bold hidden-on-mobile">' + 
      data.home.sales.bannerA + '</span>');
		$('#banner-b').replaceWith('<span id="banner-b" class="bold">' + 
      data.home.sales.bannerB + '</span>');
		$('#hero-header').replaceWith('<h1 id="hero-header">' + 
      data.home.sales.header + '</h1>');

	});

	$('#hero02').on('click', function(e){
		e.preventDefault();

		$('#hero').attr('style',
			'background: url(' + imgDir + data.home.dev.hero + 
			'); background-size: cover; background-position: center top; transition: all 0.4s ease;');	
		$('#banner-a').replaceWith('<span id="banner-a" class="bold hidden-on-mobile">' +
      data.home.dev.bannerA + '</span>');
		$('#banner-b').replaceWith('<span id="banner-b" class="bold">' + 
      data.home.dev.bannerB + '</span>');
		$('#hero-header').replaceWith('<h1 id="hero-header">' +
      data.home.dev.header + '</h1>');
	});

	$('#hero03').on('click', function(e){
		e.preventDefault();

		$('#hero').attr('style',
			'background: url(' + imgDir +
        data.home.builds.hero + 
			'); background-size: cover; background-position: center top; transition: all 0.4s ease;');
		$('#hero-header').replaceWith('<h1 id="hero-header">' +
      data.home.builds.header + '</h1>');

		$('#banner-a').replaceWith('<span id="banner-a" class="bold hidden-on-mobile">' +
      data.home.builds.bannerA + '</span>');

		$('#banner-b').replaceWith('<span id="banner-b" class="bold">' +
      data.home.builds.bannerB + '</span>');

	});

	$('#hero04').on('click', function(e){
		e.preventDefault();
		$('#hero').attr('style',
			'background: url(' + imgDir +
        data.home.sexy.hero + 
			'); background-size: cover; background-position: center top; transition: all 0.4s ease;');
		$('#hero-header').replaceWith('<h1 id="hero-header">' +
      data.home.sexy.header + '</h1>');
		$('#banner-a').replaceWith('<span id="banner-a" class="bold hidden-on-mobile">' +
      data.home.sexy.bannerA + '</span>');
		$('#banner-b').replaceWith('<span id="banner-b" class="bold">' +
      data.home.sexy.bannerB + '</span>');
	});




	$('#quote01').on('click', function(){
		$('.review').attr('style',
			'background: url(assets/images/reviewbg01.jpg); background-size: cover; background-position: center center; transition: all 0.4s ease;');
		$('.quote p').replaceWith('<p>"Sun Ray Pools took great care of us."</p>');
		$('.quote h6').replaceWith('<h6>Robert Smith, Rowlett</h6>');
		"Bob &amp; Diane are wonderful to work with. I highly recommend them. A 5 star treatment!"
	});

	$('#quote02').on('click', function(){
		$('.review').attr('style',
			'background: url(assets/images/reviewbg02.jpg); background-size: cover; background-position: center center; transition: all 0.4s ease;');
		$('.quote p').replaceWith('<p>"Another Good Review"</p>');
		$('.quote h6').replaceWith('<h6>The Beach Boys</h6>');
	});

	$('#quote03').on('click', function(){
		$('.review').attr('style',
			'background: url(assets/images/reviewbg03.jpg); background-size: cover; background-position: center center; transition: all 0.4s ease;');
		$('.quote p').replaceWith('<p>"A+"</p>');
		$('.quote h6').replaceWith('<h6>The Carpenters</h6>');
	});

	$('#quote04').on('click', function(){
		$('.review').attr('style',
			'background: url(assets/images/reviewbg04.jpg); background-size: cover; background-position: center center; transition: all 0.4s ease;');
		$('.quote p').replaceWith('<p>"And more reviews!"</p>');
		$('.quote h6').replaceWith('<h6>Jen Sale</h6>');
	});

	$('#quote05').on('click', function(){
		$('.review').attr('style',
			'background: url(assets/images/reviewbg05.jpg); background-size: cover; background-position: center center; transition: all 0.4s ease;');
		$('.quote p').replaceWith('<p>"Last featured testimonial."</p>');
		$('.quote h6').replaceWith('<h6>Declan Taintor</h6>');
	});

	$('.quo-li').on('click', function(){
		$('li.active').removeClass('active');
		$(this).addClass('active');
	});

	
  $('.smoothScroll').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top 
        }, 600); // The number here represents the speed of the scroll in milliseconds
        return false;
      }
    }
  });

	$(window).scroll(function() {
	  var sticky = $('.sticky'),
	    scroll = $(window).scrollTop();

	  if (scroll >= 440) sticky.addClass('fixed');
	  else sticky.removeClass('fixed');
	});
  
  $('.mobile-menu').click(function(){
    if ($('#nav-mobile').hasClass('collapsed')) {
      $('#nav-mobile').removeClass('collapsed');
    } else {
      $('#nav-mobile').addClass('collapsed');
    }
  });


  $('.fancybox').fancybox();


  var icons = new Skycons({
  	'color':'#0074E4',
  	'resizeClear': true
  }),
    list  = [
      "clear-day", "clear-night", "partly-cloudy-day",
      "partly-cloudy-night", "cloudy", "rain", "sleet", "snow", "wind",
      "fog"
    ],
    i;

	for(i = list.length; i--; )
	  icons.set(list[i], list[i]);

	icons.play();

	// console.log(list);


// http = require('http');

var apiKey = 'bd7804a56f5a4248bfa222108162405';

var options = {
  host: 'api.apixu.com',
  port: 80,
  path: '/v1/current.json?key=' + apiKey + '&q=',
  method: 'GET'
};



function currentWeather(query, callback){
	options.path = '/v1/current.json?key=' + apiKey + '&q=' + query;
	http.request(options, function(res) {
	  res.setEncoding('utf8');
	  res.on('data', function (chunk) {
		console.log(chunk);
	  });
	  res.on('end', function (chunk) {
	  });
	}).on('error', function(err) {
        // handle errors with the request itself
        console.error('Error with the request:', err.message);
        callback(err);
    }).end();
}




	// var weather = require('./weatherlib');

	errorHandler = function (){
		console.log('got some error')
	}
	
	//current weather takes pin code or location as first parameter, error handler callback as second
	// weather.currentWeather(75089, errorHandler);


	// forecast_request = $.get('https://api.forecast.io/forecast/e10266c0c6a480f436825e391c6df16f/32.5359,-97.3128', function(f){
	// 	console.log(f);
	// });


	// forecast_request = $.ajax({
	// 	type: 'GET',
	// 	url: 'https://api.forecast.io/forecast/e10266c0c6a480f436825e391c6df16f/32.5359,-97.3128',
	// 	dataType: 'json',
	// 	success: function(data){
	// 		console.log(data);
	// 	},
	// 	error: function(){
	// 		console.log(error);
	// 	}
	// });
		






	// { current.temp_f }

	// var xhr = new XMLHttpRequest();
	// xhr.open("GET", "http://api.apixu.com/v1/current.json?key=bd7804a56f5a4248bfa222108162405&q=75089", true);
	// // Add your code below!
	// xhr.send();
	// console.log(xhr.status);
	// console.log(xhr.statusText);


} );

},{"./model.json":1}]},{},[2]);
