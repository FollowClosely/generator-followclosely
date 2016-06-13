module.exports = function ProductData(opts) {
	if(!opts) opts = {};
	
	this.title = opts.title || 'Spotlight';

	this.spotlight = opts.spotlight || {
		'header': 'Features Spotlight',
		'subheader': 'Products that Surprise and Delight',
		'action': 'Choose which service you are most interested in:',
		'products': {
			'Social Media': 'Learn about how social networking can help you grow, and take your business to the next level.',
			'Website Development': 'End-to-end website design and development, fully customized based on what you need, right now.',
			'Search Engine Marketing': 'You should be spending your time on your business, not learning how to rank higher than your competitors on Google.'
		}
	};

	this.showcase = opts.showcase || {
			'img0': 'public/images/spotlight0.jpg',
			'img1': 'public/images/spotlight1.jpg',
			'img2': 'public/images/spotlight2.jpg'
	};

};

