const BaseIncludePlugin = require("./BaseIncludePlugin");
const { htmlSymbol } = require("./html-requires-loader");
const path = require("path");

module.exports = class HtmlDependenciesPlugin extends BaseIncludePlugin {
  parser(compilation, parser, addDependency) {
    parser.plugin("program", () => {
      const deps = parser.state.current[htmlSymbol];
      if (!deps) return;
      for (let dep of deps)
        addDependency(dep);
    });
  }
};