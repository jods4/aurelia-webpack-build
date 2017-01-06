const IncludeDependency = require('./IncludeDependency');
const NullDependencyTemplate = require('webpack/lib/dependencies/NullDependencyTemplate');
const minimatch = require("minimatch");
const path = require("path");

function listAllFiles(root, fs) {
  let results = [];
  let subfolders = [root];
  let folder;
  while (folder = subfolders.pop()) {
    for (let name of fs.readdirSync(folder)) {
      let full = path.resolve(folder, name);
      let stats = fs.statSync(full);
      if (stats.isDirectory())
        subfolders.push(full);
      else if (stats.isFile())
        results.push(path.relative(root, full));
    }
  }
  return results;
}

module.exports = class GlobDependenciesPlugin {
  /**
   * hash: { 
   *   [string]: string | string[]
   * }
   * Each hash member is a module name, for which its globbed value(s) will be added as dependencies
   **/
  constructor(hash) {
    for (let module in hash) {
      let glob = hash[module];
      if (!Array.isArray(glob)) glob = [glob];
      hash[module] = glob;
    }    
    this.hash = hash;
  }

  apply(compiler) {
    const modules = Object.getOwnPropertyNames(this.hash);
    if (modules.length === 0) return;
    const root = path.resolve();
    let hash = null;

    compiler.plugin("before-compile", (params, cb) => {
      // Map the modules passed in ctor to actual resources (files) so that we can
      // recognize them no matter what the rawRequest was (loaders, relative paths, etc.)
      hash = { };
      const resolve = compiler.resolvers.normal.resolve.bind(compiler.resolvers.normal, null, root);      
      let countdown = modules.length;
      for (let module of modules) {
        resolve(module, (err, resource) => {
          hash[resource] = this.hash[module];
          if (--countdown === 0) cb();
        });
      }
    });

    compiler.plugin("compilation", (compilation, data) => {
      const resolveFolders = compilation.options.resolve.modules;
      // `resolveFolders` can be absolute paths, but by definition this plugin only 
      // looks for files in subfolders of the current `root` path.
      const normalizers = resolveFolders.map(x => path.relative(root, x))
                                        .filter(x => !x.startsWith(".."))
                                        .map(x => new RegExp("^" + x + "/", "ig"));
      
		  const normalModuleFactory = data.normalModuleFactory;
		  compilation.dependencyFactories.set(IncludeDependency, normalModuleFactory);
      compilation.dependencyTemplates.set(IncludeDependency, NullDependencyTemplate);

      normalModuleFactory.plugin("parser", parser => {
					parser.plugin("program", () => {
            const globs = hash[parser.state.module.resource];
            if (!globs) return;

            for (let file of listAllFiles(root, compilation.inputFileSystem)) 
              for (let glob of globs) {
                if (!minimatch(file, glob)) continue;
                file = file.replace(/\\/g, "/");
                normalizers.forEach(x => file = file.replace(x, ""));
                parser.state.current.addDependency(new IncludeDependency(file));
                break;
              }
          });
				});
    });
  }
};