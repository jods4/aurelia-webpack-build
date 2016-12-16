const parse = require('html-loader/lib/attributesParser');

const htmlSymbol = loader.htmlSymbol = Symbol('HTML dependencies');

function loader(content) {
  this.cacheable && this.cacheable();  
  this._module[htmlSymbol] = 
    parse(content, (tag, attr) => 
      tag === 'require' && attr === 'from' ||
      attr === 'view' ||
      attr === 'view-model')
    .map(r => r.value);
  return content;
}

module.exports = loader;