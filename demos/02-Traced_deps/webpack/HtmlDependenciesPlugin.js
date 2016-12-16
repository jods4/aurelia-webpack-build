const IncludeDependency = require("./IncludeDependency");
const { htmlSymbol } = require("./html-requires-loader");
const path = require("path");

module.exports = class HtmlDependenciesPlugin {
  apply(compiler) {
    compiler.plugin("compilation", function (compilation, data) {
		  const normalModuleFactory = data.normalModuleFactory;
		  compilation.dependencyFactories.set(IncludeDependency, normalModuleFactory);
      compilation.dependencyTemplates.set(IncludeDependency, IncludeDependency.Template);

      normalModuleFactory.plugin("parser", function (parser) {
        parser.plugin("program", function () {
          const deps = this.state.current[htmlSymbol];
          if (!deps) return;
          for (let dep of deps)
            this.state.current.addDependency(new IncludeDependency(dep));
        });
      });
    });
  }
}