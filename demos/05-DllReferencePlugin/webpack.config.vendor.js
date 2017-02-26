const path = require("path");
const { DllPlugin } = require("webpack");
const { AureliaPlugin } = require("aurelia-webpack-plugin");
// TODO: this is only temporary until a patched aurelia release is published.
const coreDeps = require("aurelia-core-dependencies");

module.exports = {
  entry: {
    vendor: [
      "aurelia-bootstrapper",      
      "aurelia-router",
    ],
  },
  output: {
    path: path.resolve("dist"),
    filename: "[name].js",
    library: "[name]_[hash]",
  },
  resolve: {
    extensions: ['.js'],
  },
  plugins: [
    new DllPlugin({
      path: path.resolve("dist", "[name]-manifest.json"),
      name: "[name]_[hash]",
    }),
    new AureliaPlugin({
      aureliaApp: undefined,
    }),
    coreDeps,
  ],
};