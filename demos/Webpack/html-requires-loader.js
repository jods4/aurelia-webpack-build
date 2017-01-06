const parse = require("html-loader/lib/attributesParser");

const htmlSymbol = loader.htmlSymbol = Symbol("HTML dependencies");

loader.attributes = {
  "require": [ "from" ],
  "compose": [ "view", "view-model" ],
};

function loader(content) {
  this.cacheable && this.cacheable();
  this._module[htmlSymbol] = 
    parse(content, (tag, attr) => {
      const attrs = loader.attributes[tag];
      return attrs && attrs.includes(attr);
    })
    .map(attr => attr.value);
  return content;
}

module.exports = loader;