module.exports = function LandingData(opts) {
  if(!opts) opts = {};
  this.title = opts.title || 'title from landing.data.js';
  this.text = opts.text || 'text from landing.data.js';
};

