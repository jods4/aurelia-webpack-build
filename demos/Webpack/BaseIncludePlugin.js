const IncludeDependency = require('./IncludeDependency');
const NullDependencyTemplate = require('webpack/lib/dependencies/NullDependencyTemplate');

module.exports = class BaseIncludePlugin {
  apply(compiler) {
    compiler.plugin("compilation", (compilation, data) => {
      const normalModuleFactory = data.normalModuleFactory;
      compilation.dependencyFactories.set(IncludeDependency, normalModuleFactory);
      compilation.dependencyTemplates.set(IncludeDependency, NullDependencyTemplate);

      normalModuleFactory.plugin("parser", parser => {
        function addDependency(request) {
          parser.state.current.addDependency(new IncludeDependency(request));
        }
        
        this.parser(compilation, parser, addDependency);
      });
    });
  }

  parser(compilation, parser, add) { /* Meant to be overriden */ }  
}