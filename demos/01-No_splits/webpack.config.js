const path = require("path");
const { AureliaPlugin } = require("aurelia-webpack-plugin");
// TODO: this is only temporary until a patched aurelia release is published.
const coreDeps = require("aurelia-core-dependencies");

module.exports = {
  entry: "main",

  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "dist",
    filename: "bundle.js",    
  },

  resolve: {
    extensions: [".ts", ".js"],
    modules: ["src", "node_modules"].map(x => path.resolve(x)),
  },

  module: {
    rules: [
      { test: /\.less$/i, use: ["style-loader", "css-loader", "less-loader"] },
      { test: /\.ts$/i, use: "ts-loader" },
      { test: /\.html$/i, use: "html-loader" },
    ]
  },  

  plugins: [
    new AureliaPlugin({ includeAll: "src" }),
    coreDeps,
  ],
};