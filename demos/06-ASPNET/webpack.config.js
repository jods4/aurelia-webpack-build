const path = require("path");
const { AureliaPlugin } = require("aurelia-webpack-plugin");

module.exports = {
  entry: { main: "aurelia-bootstrapper" },

  output: {
    path: path.join(__dirname, "wwwroot", "dist"),
    filename: "app.js",
    publicPath: "/dist/",
  },

  resolve: {
    extensions: [".ts", ".js"],
    modules: ["App", "node_modules"].map(x => path.resolve(x)),    
  },

  module: {
    rules: [
      { test: /\.html$/i, loaders: "html-loader" },
      { test: /\.ts$/i, loaders: "ts-loader" },
    ]
  },

  plugins: [
    new AureliaPlugin(),
  ]
};