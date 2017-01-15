const path = require("path");

// This plugins preserves the module names of IncludeDependency and 
// AureliaDependency so that they can be dynamically requested by 
// aurelia-loader.
// All other dependencies are handled by webpack itself and don't
// need special treatment.
module.exports = class PreserveModuleNamePlugin {
  apply(compiler) {
    compiler.plugin("compilation", compilation => {
      compilation.plugin("before-module-ids", modules => {
        let { modules: roots, extensions } = compilation.options.resolve;
        roots = roots.map(x => path.resolve(x));
        const normalizers = extensions.map(x => new RegExp(x.replace(/\./g, "\\.") + "$", "i"));

        for (module of getPreservedModules(modules)) {
          let relative = fixNodeModule(module, modules) || 
                         makeModuleRelative(roots, module.resource);
          
          if (!relative) continue;  // An absolute resource that is not in any module folder? Ignore.
          
          // Remove default extensions 
          normalizers.forEach(n => relative = relative.replace(n, ""));
          
          // Keep "async!" in front of code splits proxies, they are used by aurelia-loader
          if (/^async[?!]/.test(module.rawRequest)) 
            relative = "async!" + relative;
                  
          module.id = relative.replace(/\\/g, "/");
        }
      })
    });
  }
};

function getPreservedModules(modules) {
  const result = new Set();
  for (let module of modules) {
    for (let dep of module.dependencies) {
      if (dep.preserveName === true && dep.module)  // dep.module == null is a missing module, which will be caught and reported by webpack later
          result.add(dep.module);      
    }
    for (let block of module.blocks) 
      for (let dep of block.dependencies) {
        if (dep.preserveName === true && dep.module)
          result.add(dep.module);
      }
  }
  return result;
}

function makeModuleRelative(roots, resource) {
  for (let root of roots) {
    let relative = path.relative(root, resource);
    if (!relative.startsWith('..')) return relative;
  }
  return null;
}

function fixNodeModule(module, allModules) {
  if (!/\bnode_modules\b/i.test(module.resource)) return null;
  // The problem with node_modules is that often the root of the module is not /node_modules/my-lib
  // Webpack is going to look for `main` in `project.json` to find where the main file actually is.
  // And this can of course be configured differently with `resolve.alias`, `resolve.mainFields` & co.
  
  // Our best hope is that the file was not required as a relative path, then we can just preserve that.
  if (!module.rawRequest.startsWith(".")) return module.rawRequest;

  // Otherwise we need to build the relative path from the module root, which as explained above is hard to find.
  // Ideally we could use webpack resolvers, but they are currently async-only, which can't be used in before-modules-id
  // See https://github.com/webpack/webpack/issues/1634
  // Instead, we'll look for the root library module, because it should have been requested somehow and work from there.
  // Note that the negative lookahead (?!.*node_modules) ensures that we only match the last node_modules/ folder in the path,
  // in case the package was located in a sub-node_modules (which can occur in special circumstances).
  let name = /\bnode_modules[\\/](?!.*\bnode_modules\b)([^\\/]*)/i.exec(module.resource)[1];
  let entry = allModules.find(m => m.rawRequest === name);
  return name + "/" + path.relative(path.dirname(entry.resource), module.resource);
}