const ModuleDependency = require("webpack/lib/dependencies/ModuleDependency");
const NullDependencyTemplate = require("webpack/lib/dependencies/NullDependencyTemplate");

class IncludeDependency extends ModuleDependency {
  constructor(request) {
    super(request);
    this.preserveName = true;
  }
}

IncludeDependency.Template = NullDependencyTemplate;

module.exports = IncludeDependency;