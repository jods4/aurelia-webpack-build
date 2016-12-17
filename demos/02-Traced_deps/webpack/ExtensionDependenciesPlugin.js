const IncludeDependency = require("./IncludeDependency");
const minimatch = require("minimatch");
const path = require("path");
const fs = require("fs");

module.exports = class ExtensionDependenciesPlugin {
  constructor(glob, extensions = [".html", ".htm"]) {
    this.glob = glob;
    this.extensions = typeof extensions === "string" ? [extensions] : extensions;
  }

  apply(compiler) {
    const { glob, extensions } = this;
    const root = path.resolve();

    compiler.plugin("compilation", function (compilation, data) {
      const normalModuleFactory = data.normalModuleFactory;
      compilation.dependencyFactories.set(IncludeDependency, normalModuleFactory);
      compilation.dependencyTemplates.set(IncludeDependency, IncludeDependency.Template);

      normalModuleFactory.plugin("parser", function (parser) {
        parser.plugin("program", function () {
          const file = this.state.current.resource;
          if (!file) return;
          if (!minimatch(path.relative(root, file), glob)) return;
          const base = file.replace(/\.[^\\/.]*$/, "");
          for (let ext of extensions) {
            const probe = base + ext;
            if (fs.existsSync(probe))
              this.state.current.addDependency(new IncludeDependency(probe));
          }
        });
      });
    });
  }
};