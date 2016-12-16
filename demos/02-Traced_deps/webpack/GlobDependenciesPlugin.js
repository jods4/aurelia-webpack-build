const IncludeDependency = require('./IncludeDependency');
const glob = require("glob");

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
   */
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
    let hash = this.hash;
    
    compiler.plugin("compilation", function(compilation, data) {      
		  const normalModuleFactory = data.normalModuleFactory;
		  compilation.dependencyFactories.set(IncludeDependency, normalModuleFactory);
      compilation.dependencyTemplates.set(IncludeDependency, IncludeDependency.Template);

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

            for (let pattern of include)
              for (let file of glob.sync(pattern)) {
                if (normalize) file = normalize(file);                
                this.state.current.addDependency(new IncludeDependency(file));
              }
          });
				});
    });
  }
};