const AureliaDependenciesPlugin = require("./AureliaDependenciesPlugin");
const ConventionDependenciesPlugin = require("./ConventionDependenciesPlugin");
const GlobDependenciesPlugin = require("./GlobDependenciesPlugin");
const HtmlDependenciesPlugin = require("./HtmlDependenciesPlugin");
const ModuleDependenciesPlugin = require("./ModuleDependenciesPlugin");
const PreserveExportsPlugin = require("./PreserveExportsPlugin");
const PreserveModuleNamePlugin = require("./PreserveModuleNamePlugin");

module.exports =
class AureliaPlugin {
  constructor(options = {}) {
    this.options = Object.assign({
      includeAll: false,  // or folder, e.g. "src"

      aureliaApp: "main",
      moduleMethods: [],
      viewsFor: "src/**/*.{ts,js}",
      viewsExtensions: ".html",
    },
    options);
  }

  apply(compiler) {
    const opts = this.options;

    if (opts.includeAll) {
      // Grab everything approach
      let entry = compiler.options.entry;
      // Fix: ideally we would require `entry` to be a string
      //      but in practice, using webpack-dev-server might shift one (or two --hot) extra entries.
      if (typeof entry === "object")
        entry = entry[Object.getOwnPropertyNames(entry)[0]];
      if (Array.isArray(entry))
        entry = entry[entry.length - 1];
      if (typeof entry !== "string")
        throw new Error("includeAll option only works with a single entry point.")
      compiler.apply(
        // This plugin ensures that everything in /src is included in the bundle.
        // This prevents splitting in several chunks but is super easy to use and setup,
        // no change in existing code or PLATFORM.nameModule() calls are required.
        new GlobDependenciesPlugin({ [entry]: opts.includeAll + "/**" })
      );
      // We don't use aureliaApp as we assume it's included in the folder above
      opts.aureliaApp = undefined;
    }

    else {
      // Traced dependencies approach
      compiler.apply(      
        // This plugin looks for companion files by swapping extensions,
        // e.g. the view of a ViewModel. @useView and co. should use PLATFORM.moduleName().
        new ConventionDependenciesPlugin(opts.viewsFor, opts.viewsExtensions),
        // This plugin adds dependencies traced by html-requires-loader
        // Note: the config extension point for this one is html-requires-loader.attributes.
        new HtmlDependenciesPlugin()
      );
    }

    // Common plugins
    compiler.apply(
      // Adds some dependencies that are not documented by `PLATFORM.moduleName`
      new ModuleDependenciesPlugin({        
        "aurelia-bootstrapper": [
          opts.aureliaApp,                // entry point
          getPAL(compiler.options.target) // PAL for target
        ],
      }),
      // This plugin traces dependencies in code that are wrapped in PLATFORM.moduleName() calls
      new AureliaDependenciesPlugin(...opts.moduleMethods),
      // This plugin preserves module names for dynamic loading by aurelia-loader
      new PreserveModuleNamePlugin(),
      // This plugin supports preserving specific exports names when dynamically loading modules
      // with aurelia-loader, while still enabling tree shaking all other exports.
      new PreserveExportsPlugin()
    );
  }
};

function getPAL(target) {
  switch (target) {
    case "web": return "aurelia-pal-browser";
    case "webworker": return "aurelia-pal-worker";
    default: return "aurelia-pal-node";
  }
}