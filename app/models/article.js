// Example model


function Article (opts) {
  if(!opts) opts = {};
  this.title = opts.title || 'test: article title';
  this.url = opts.url || '/test-article-url';
  this.text = opts.text || 'where does this text go?';
}

module.exports = Article;

