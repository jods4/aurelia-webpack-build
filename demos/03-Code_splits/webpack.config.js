const path = require("path");
const { AureliaPlugin, ModuleDependenciesPlugin } = require("../webpack");

module.exports = {
  entry: { main: "aurelia-bootstrapper" },

  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "dist",
    filename: "[name].js",    
    chunkFilename: "[name].js"
  },

  resolve: {
    extensions: [".ts", ".js"],
    modules: ["src", "node_modules"].map(x => path.resolve(x)),
    symlinks: false,
  },

  resolveLoader: {
    alias: {
      'async': path.resolve(__dirname, '../webpack/async-loader.js'),
    }
  },

  module: {
    rules: [
      { test: /\.less$/i, use: ["style-loader", "css-loader", "less-loader"] },
      { test: /\.ts$/i, use: "ts-loader" },
      { test: /\.html$/i, use: ["html-loader", "../webpack/html-requires-loader"] },      
    ]
  },  

  plugins: [
    new AureliaPlugin(),
    new ModuleDependenciesPlugin({
      "aurelia-bootstrapper": [ 
        // "aurelia-loader-webpack",    // detected by webpack itself
        "aurelia-pal-browser", 
        "aurelia-framework", 
      ],
      "aurelia-framework": [
        "aurelia-history-browser",
        "aurelia-logging-console", 
        "aurelia-templating-binding",
        "aurelia-templating-resources",
        "aurelia-templating-router",
        "aurelia-event-aggregator",
      ],
    }),
  ],
};