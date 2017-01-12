const ModuleDependency = require("webpack/lib/dependencies/ModuleDependency");
const { Template: NullDependencyTemplate } = require("webpack/lib/dependencies/NullDependency");

class IncludeDependency extends ModuleDependency {
  constructor(request) {
    super(request);
    this.preserveName = true;
  }
}

IncludeDependency.Template = NullDependencyTemplate;

module.exports = IncludeDependency;