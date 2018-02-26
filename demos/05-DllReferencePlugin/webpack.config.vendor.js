const path = require("path");
const { DllPlugin } = require("webpack");
const { AureliaPlugin } = require("aurelia-webpack-plugin");

module.exports = {
  mode: "development",
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
  ],
};