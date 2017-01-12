const IncludeDependency = require('./IncludeDependency');
const { Template: NullDependencyTemplate } = require('webpack/lib/dependencies/NullDependency');

module.exports = class BaseIncludePlugin {
  apply(compiler) {
    compiler.plugin("compilation", (compilation, data) => {
      const normalModuleFactory = data.normalModuleFactory;
      compilation.dependencyFactories.set(IncludeDependency, normalModuleFactory);
      compilation.dependencyTemplates.set(IncludeDependency, new NullDependencyTemplate());

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