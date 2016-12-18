const ModuleDependency = require("webpack/lib/dependencies/ModuleDependency");
const AbstractPlugin = require("webpack/lib/AbstractPlugin");

class AureliaDependency extends ModuleDependency {  
  constructor(request, range) {
    super(request);
    this.range = range;
  }
}

class Template {
  apply(dep, source, outputOptions, requestShortener) {
    source.replace(dep.range[0], dep.range[1] - 1, "'" + dep.request + "'");
  };
}

function callParser(expr) {
  if (expr.arguments.length !== 1) return;
  let param = this.evaluateExpression(expr.arguments[0]);
  if (!param.isString()) return;
  let dep = new AureliaDependency(param.string, expr.range);
  this.state.current.addDependency(dep);
  return true;
}

module.exports = class AureliaDependenciesPlugin {
  constructor(...methods) {
    if (methods.length === 0) methods = ['PLATFORM.moduleName'];
    let plugin = {};
    for (let method of methods) plugin["call " + method] = callParser;
    this.parserPlugin = AbstractPlugin.create(plugin);
  }

  apply(compiler) {
    compiler.plugin("compilation", (compilation, params) => {
      const normalModuleFactory = params.normalModuleFactory;

      compilation.dependencyFactories.set(AureliaDependency, normalModuleFactory);
      compilation.dependencyTemplates.set(AureliaDependency, new Template());

      normalModuleFactory.plugin("parser", (parser, parserOptions) => {
        parser.apply(new this.parserPlugin());        
      });
    });
  }
};