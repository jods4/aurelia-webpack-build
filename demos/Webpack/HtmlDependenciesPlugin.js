const BaseIncludePlugin = require("./BaseIncludePlugin");
const { htmlSymbol } = require("./html-requires-loader");

module.exports = class HtmlDependenciesPlugin extends BaseIncludePlugin {
  parser(compilation, parser, addDependency) {
    parser.plugin("program", () => {
      const deps = parser.state.current[htmlSymbol];
      if (!deps) return;
      deps.forEach(addDependency);
    });
  }
};