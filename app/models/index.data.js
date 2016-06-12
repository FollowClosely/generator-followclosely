module.exports = function IndexData (opts) {
	if(!opts) {
		options = {};
	}

	this.title = 'Index Page';

	this.nav = {
		Home: '',
		About: 'about',
		Reviews: 'reviews',
		Portfolio:'our-work',
		Contact: 'contact'
	};

	this.buttons = [
		'Sales', 'Dev', 'Builds', 'More'
	];

	this.home = {
		sales: {
			hero: 'main01.jpg',
			header: 'SalesOps.',
			bannerA: 'Download the Checklist',
			bannerB: '10 Tips for a Perfect Sale',
			btntext: 'Download'
		},
		dev: {
			hero: 'main02.jpg',
			header: 'DevOps.',
			bannerA: 'Download the Checklist',
			bannerB: '11 Tricks for a Smooth Deploy(ment)',
			btntext: 'Download'
		},
		builds: {
			hero: 'main03.jpg',
			header: 'Good Builds.',
			bannerA: 'Download the Checklist',
			bannerB: 'The 12 Secrets of Architecture',
			btntext: 'Download'
		},
		sexy: {
			hero: 'main04.jpg',
			header: 'Sexy Product.',
			bannerA: 'Download the Checklist',
			bannerB: '13 Hacks for a Summer Bod',
			btntext: 'Download'
		}
	};

	this.features = {
		rowone: {
			'Social': 'slide01.jpg',
			'Email': 'slide02.jpg',
			'Websites': 'slide03.jpg',
			'SEO': 'slide04.jpg',
			'Design': 'slide05.jpg',
			'SalesOps': 'slide06.jpg',
		},
		rowtwo: {
			'Brand Identity': 'slide07.jpg',
			'Lead Generation': 'slide08.jpg',
			'Networking & Referrals': 'slide09.jpg'
		}
	};

};
