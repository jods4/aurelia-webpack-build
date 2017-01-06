const ModuleDependency = require("webpack/lib/dependencies/ModuleDependency");
const AbstractPlugin = require("webpack/lib/AbstractPlugin");

class AureliaDependency extends ModuleDependency {  
  constructor(request, range) {
    super(request);
    this.range = range;
    this.preserveName = true;
  }
}

class Template {
  apply(dep, source, outputOptions, requestShortener) {
    source.replace(dep.range[0], dep.range[1] - 1, "'" + dep.request.replace(/^async(?:\?[^!]*)?!/, "") + "'");
  };
}

function callParser(expr) {
  if (expr.arguments.length === 0) return;
  let param = this.evaluateExpression(expr.arguments[0]);
  if (!param.isString()) return;
  // Normal module dependency
  // PLATFORM.moduleName('some-module')
  if (expr.arguments.length === 1) {
    let dep = new AureliaDependency(param.string, expr.range);
    this.state.current.addDependency(dep);
    return true;
  }
  if (expr.arguments.length > 2) return;
  let param2 = this.evaluateExpression(expr.arguments[1]);
  if (!param2.isString()) return;
  // Async module dependency
  // PLATFORM.moduleName('some-module', 'chunk name');
  let dep = new AureliaDependency(`async?lazy&name=${param2.string}!${param.string}`, expr.range);
  this.state.current.addDependency(dep);
  return true;
}

module.exports = class AureliaDependenciesPlugin {
  constructor(...methods) {
    // Always include PLATFORM.moduleName as it's what used in libs.
    if (!methods.includes("PLATFORM.moduleName"))
      methods.push("PLATFORM.moduleName");
    
    let plugin = {};
    for (let method of methods) 
      plugin["call " + method] = callParser;
    
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