const BaseIncludePlugin = require("./BaseIncludePlugin");
const minimatch = require("minimatch");
const path = require("path");

module.exports = class ExtensionDependenciesPlugin extends BaseIncludePlugin {
  constructor(glob, extensions = [".html", ".htm"]) {
    super();
    this.glob = glob;
    this.extensions = typeof extensions === "string" ? [extensions] : extensions;
  }

  parser(compilation, parser, addDependency) {
    const { glob, extensions } = this;
    const root = path.resolve();

    parser.plugin("program", () => {
      const { resource: file, rawRequest } = parser.state.current;
      if (!file) return;
      // We don't want to bring in dependencies of the async! loader
      if (/^async[!?]/.test(rawRequest)) return;
      if (!minimatch(path.relative(root, file), glob)) return;
      const base = file.replace(/\.[^\\/.]*$/, "");
      for (let ext of extensions) {
        const probe = base + ext;
        try {
          compilation.inputFileSystem.statSync(probe);  // Check if file exists
          addDependency(probe);
        } 
        catch (ex) { }
      }
    });
  }
};