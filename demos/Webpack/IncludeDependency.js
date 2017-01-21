const { dependencyImports } = require("./PreserveExportsPlugin");
const { preserveModuleName } = require("./PreserveModuleNamePlugin");
const ModuleDependency = require("webpack/lib/dependencies/ModuleDependency");
const { Template: NullDependencyTemplate } = require("webpack/lib/dependencies/NullDependency");

module.exports = 
class IncludeDependency extends ModuleDependency {
  constructor(request, options) {
    super(request);
    this.options = options;
  }

  get type() {
    return "aurelia module";
  }

  getReference() {
    let importedNames = this.options && this.options.exports;
    return importedNames ? 
      { module: this.module, importedNames } :
      super.getReference();
  }

  get [preserveModuleName]() {
    return true;
  }

  get [dependencyImports]() {
    return this.options && this.options.exports;
  }
};

module.exports.Template = NullDependencyTemplate;