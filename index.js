const { ModuleDependenciesPlugin } = require("aurelia-webpack-plugin");

module.exports = new ModuleDependenciesPlugin({
  "aurelia-bootstrapper": [
    "aurelia-pal-browser",
    { name: "aurelia-framework", exports: [ "Aurelia" ] }
  ],
  "aurelia-framework": [
    { name: "aurelia-history-browser", exports: ["configure"] },
    { name: "aurelia-logging-console",  exports: ["configure", "ConsoleAppender"] },
    { name: "aurelia-templating-binding", exports: ["configure"] },
    { name: "aurelia-templating-resources", exports: ["configure"] },
    { name: "aurelia-templating-router", exports: ["configure"] },
    { name: "aurelia-event-aggregator", exports: ["configure"] },
  ],
  "aurelia-templating-router": [
    "./router-view",
    "./route-href",
  ],
  "aurelia-templating-resources": [
    "./compose",
    "./if", 
    "./with",
    "./repeat",
    "./show",
    "./hide",
    "./replaceable",
    "./sanitize-html",
    "./focus",
    "./binding-mode-behaviors",
    "./throttle-binding-behavior",
    "./debounce-binding-behavior",
    "./signal-binding-behavior",
    "./update-trigger-binding-behavior",
    "./attr-binding-behavior",
  ]
});