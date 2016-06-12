$(function() {

var imgDir   = './images/',
		quote1   = 'reviewbg01.jpg',
		quote2   = 'reviewbg02.jpg',
		quote3   = 'reviewbg03.jpg',
		quote4   = 'reviewbg04.jpg',
		quote5   = 'reviewbg05.jpg';

var Data = {
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
};

$('#hero-ul a').on('click', function(){
	$('a.active').removeClass('active');
	$(this).addClass('active');
});

$('#hero00').on('click', function(e){
	e.preventDefault();

	$('#hero').attr('style',
		'background: url(' + imgDir + Data.sales.hero + 
		'); background-size: cover; background-position: center center; transition: all 0.4s ease;');
	$('#hero-header').replaceWith('<h1 id="hero-header">' + 
		Data.sales.header + '</h1>');
	$('#banner-a').replaceWith('<span id="banner-a" class="bold hidden-on-mobile">' + 
		Data.sales.bannerA + '</span>');
	$('#banner-b').replaceWith('<span id="banner-b" class="bold">' + 
		Data.sales.bannerB + '</span>');

});

$('#hero01').on('click', function(e){
	e.preventDefault();

	$('#hero').attr('style',
		'background: url(' + imgDir + Data.dev.hero + 
		'); background-size: cover; background-position: center top; transition: all 0.4s ease;');	
	$('#hero-header').replaceWith('<h1 id="hero-header">' +
		Data.dev.header + '</h1>');
	$('#banner-a').replaceWith('<span id="banner-a" class="bold hidden-on-mobile">' +
		Data.dev.bannerA + '</span>');
	$('#banner-b').replaceWith('<span id="banner-b" class="bold">' + 
		Data.dev.bannerB + '</span>');
});

$('#hero02').on('click', function(e){
	e.preventDefault();

	$('#hero').attr('style',
		'background: url(' + imgDir +
			Data.builds.hero + 
		'); background-size: cover; background-position: center top; transition: all 0.4s ease;');
	$('#hero-header').replaceWith('<h1 id="hero-header">' +
		Data.builds.header + '</h1>');

	$('#banner-a').replaceWith('<span id="banner-a" class="bold hidden-on-mobile">' +
		Data.builds.bannerA + '</span>');

	$('#banner-b').replaceWith('<span id="banner-b" class="bold">' +
		Data.builds.bannerB + '</span>');

});

$('#hero03').on('click', function(e){
	e.preventDefault();
	$('#hero').attr('style',
		'background: url(' + imgDir +
			Data.sexy.hero + 
		'); background-size: cover; background-position: center center; transition: all 0.4s ease;');
	$('#hero-header').replaceWith('<h1 id="hero-header">' +
		Data.sexy.header + '</h1>');
	$('#banner-a').replaceWith('<span id="banner-a" class="bold hidden-on-mobile">' +
		Data.sexy.bannerA + '</span>');
	$('#banner-b').replaceWith('<span id="banner-b" class="bold">' +
		Data.sexy.bannerB + '</span>');
});




$('#quote01').on('click', function(){
	$('.review').attr('style',
		'background: url(assets/images/reviewbg01.jpg); background-size: cover; background-position: center center; transition: all 0.4s ease;');
	$('.quote p').replaceWith('<p>"Sun Ray Pools took great care of us."</p>');
	$('.quote h6').replaceWith('<h6>Robert Smith, Rowlett</h6>');
	
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

} );

