const BaseIncludePlugin = require("./BaseIncludePlugin");
const minimatch = require("minimatch");
const path = require("path");

module.exports = class ConventionDependenciesPlugin extends BaseIncludePlugin {
  /**
   * glob: a pattern that filters which files are affected
   */
  constructor(glob, conventions = [".html", ".htm"]) {
    super();
    this.glob = glob;
    if (!Array.isArray(conventions)) conventions = [conventions];
    conventions.forEach((c, i) => {
      if (typeof c === "string") 
        conventions[i] = swapExtension.bind(null, c);
    });
    this.conventions = conventions;
  }

  parser(compilation, parser, addDependency) {
    const root = path.resolve();

    parser.plugin("program", () => {
      const { resource: file, rawRequest } = parser.state.current;
      if (!file) return;
      // We don't want to bring in dependencies of the async! loader
      if (/^async[!?]/.test(rawRequest)) return;
      if (!minimatch(path.relative(root, file), this.glob)) return;
      for (let c of this.conventions) {
        try {
          const probe = c(file);
          compilation.inputFileSystem.statSync(probe);  // Check if file exists
          addDependency(probe);
        } 
        catch (ex) { }
      }
    });
  }
};

function swapExtension(newExtension, file) {
  return file.replace(/\.[^\\/.]*$/, "") + newExtension;
}