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
   *  hash: { 
   *    [string]: string | 
   *              string[] | 
   *              {
   *                include: string | string[], 
   *                normalize: RegExp | RegExp[] | function
   *              }
   *  }
   * or 
   * hash: string (the folder to include in entry module, defaults to 'src') 
   **/
  constructor(module = "main", folder = "src") {
    if (typeof module !== "object") {
      module = {
        [module]: { 
          include: [ folder + "/**/*.*" ],
          normalize: [ new RegExp('^' + folder + '\/'), /\.[tj]s$/ ]
        } 
      };
    }
    this.hash = module;
  }

  apply(compiler) {
    const hash = this.hash;
    const root = path.resolve();
    
    compiler.plugin("compilation", function(compilation, data) {
		  const normalModuleFactory = data.normalModuleFactory;
		  compilation.dependencyFactories.set(IncludeDependency, normalModuleFactory);
      compilation.dependencyTemplates.set(IncludeDependency, NullDependencyTemplate);

      normalModuleFactory.plugin("parser", function (parser) {
					parser.plugin("program", function () {
            const options = hash[this.state.module.rawRequest];
            if (!options) return;

            let { include = options, normalize } = options;
            if (!Array.isArray(include)) include = [include];
            if (normalize && typeof normalize !== 'function') {
              const patterns = Array.isArray(normalize) ? normalize : [normalize];
              normalize = name => patterns.reduce((prev, cur) => prev.replace(cur, ""), name);
            }

            for (let file of listAllFiles(root, compilation.inputFileSystem)) 
              for (let pattern of include) {
                if (!minimatch(file, pattern)) continue;
                file = file.replace(/\\/g, "/");
                if (normalize) file = normalize(file);                
                this.state.current.addDependency(new IncludeDependency(file));
                break;
              }
          });
				});
    });
  }
};