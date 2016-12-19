const path = require("path");

// This plugins preserves the module names of IncludeDependency and 
// AureliaDependency  so that they can be dynamically requested by 
// aurelia-loader.
// All other dependencies are handled by webpack itself and don't
// need special treatment.
// Dependencies that are marked with PLATFORM.moduleName() or 
// that are view conventions (extension swaps) or that simply are
// globbed (for convenience) are processed with a predictable name.
module.exports = class PreserveModuleNamePlugin {
  constructor(appRoot = "src", normalize = /\.[tj]s$/) {
    this.appRoot = path.resolve(appRoot);
    this.normalize = normalize;
  }

  apply(compiler) {
    compiler.plugin("compilation", compilation => {
      compilation.plugin("before-module-ids", modules => {
        for (module of getPreservedModules(modules)) {
          let appRelative = path.relative(this.appRoot, module.resource);          
          // For project dependencies, their name is based on the app-relative path.
          if (!appRelative.startsWith("..")) {
            if (this.normalize)
              appRelative = appRelative.replace(this.normalize, "");
            module.id = appRelative.replace(/\\/g, "/");
          }
          // For PLATFORM.moduleName() dependencies in libraries, preserve their rawRequest if not relative, 
          // other build the relative path from package name.
          else {
            let name = module.rawRequest;
            if (name.startsWith('.')) {
              name = path.join(module.context, name);
              const packageRoot = module.context.substr(0, module.context.lastIndexOf('node_modules') + 'node_modules'.length);
              name = path.relative(packageRoot, name).replace(/\\/g, "/");
              // TODO: this is a hack, I need to find a better solution
              name = name.replace(/dist\/[^/]*\//, "");
            }
            module.id = name;
          }
          // TODO: code splits require a second dependency with an added async! loader in their name.
        }
      })
    });
  }
};

function getPreservedModules(modules) {
  const result = new Set();
  for (let module of modules)
    for (let dep of module.dependencies)
      if (dep.preserveName === true)
        result.add(dep.module);
  // TODO: for now we preserve the name of all aurelia-* modules, 
  //       until proper PLATFORM.moduleName() support
  for (let module of modules)
    if (/node_modules[\\/]aurelia-.*?[\\/]/i.test(module.resource))
      result.add(module);
  return result;
}