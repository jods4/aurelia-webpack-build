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
    alias: { "./dist/commonjs": "./dist/native-modules" },
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
      "aurelia-framework": [
        { name: "aurelia-history-browser", exports: ["configure"] },
        { name: "aurelia-logging-console",  exports: ["configure", "ConsoleAppender"] },
        { name: "aurelia-templating-binding", exports: ["configure"] },
        { name: "aurelia-templating-resources", exports: ["configure"] },
        { name: "aurelia-templating-router", exports: ["configure"] },
        { name: "aurelia-event-aggregator", exports: ["configure"] },
      ],
    }),
  ],
};