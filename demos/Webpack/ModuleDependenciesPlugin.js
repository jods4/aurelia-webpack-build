const BaseIncludePlugin = require("./BaseIncludePlugin");
const path = require("path");

module.exports = class ModuleDependenciesPlugin extends BaseIncludePlugin {
  /**
   * hash: { [string]: string | string[] }
   * Each hash member is a module name, for which additional module names are added as dependencies.
   */
  constructor(hash) {
    super();
    for (let module in hash) {
      let deps = hash[module];
      if (!Array.isArray(deps)) 
        deps = [deps];
      if (!deps.some(x => !!x))
        delete hash[module];
      else
        hash[module] = deps;
    }
    this.hash = hash;
    this.root = path.resolve();
  }

  apply(compiler) {
    const hashKeys = Object.getOwnPropertyNames(this.hash);
    if (hashKeys.length === 0) return;

    compiler.plugin("before-compile", (params, cb) => {
      // Map the modules passed in ctor to actual resources (files) so that we can
      // recognize them no matter what the rawRequest was (loaders, relative paths, etc.)
      this.modules = { };
      const resolve = compiler.resolvers.normal.resolve.bind(compiler.resolvers.normal, null, this.root);
      let countdown = hashKeys.length;
      for (let module of hashKeys) {
        resolve(module, (err, resource) => {
          this.modules[resource] = this.hash[module];
          if (--countdown === 0) cb();
        });
      }
    });

    super.apply(compiler);
  }

  parser(compilation, parser, addDependency) {
    parser.plugin("program", () => {
      const deps = this.modules[parser.state.module.resource];
      if (deps) deps.forEach(addDependency);
    });
  }
}