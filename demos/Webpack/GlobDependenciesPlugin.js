const BaseIncludePlugin = require("./BaseIncludePlugin");
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

module.exports = class GlobDependenciesPlugin extends BaseIncludePlugin {
  /**
   * hash: { [string]: string | string[] }
   * Each hash member is a module name, for which globbed value(s) will be added as dependencies
   **/
  constructor(hash) {
    super();
    for (let module in hash) {
      let glob = hash[module];
      if (!Array.isArray(glob)) glob = [glob];
      hash[module] = glob;
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
    const resolveFolders = compilation.options.resolve.modules;
    // `resolveFolders` can be absolute paths, but by definition this plugin only 
    // looks for files in subfolders of the current `root` path.
    const normalizers = resolveFolders.map(x => path.relative(this.root, x))
                                      .filter(x => !x.startsWith(".."))
                                      .map(x => new RegExp("^" + x + "/", "ig"));

    parser.plugin("program", () => {      
      const globs = this.modules[parser.state.module.resource];
      if (!globs) return;

      for (let file of listAllFiles(this.root, compilation.inputFileSystem)) 
        for (let glob of globs) {
          if (!minimatch(file, glob)) continue;
          file = file.replace(/\\/g, "/");
          normalizers.forEach(x => file = file.replace(x, ""));
          addDependency(file);
          break;
        }
    });
  }
};