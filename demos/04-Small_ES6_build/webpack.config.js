const path = require("path");
const BabiliPlugin = require("babili-webpack-plugin");
const { AureliaPlugin } = require("aurelia-webpack-plugin");

module.exports = {
  entry: "aurelia-bootstrapper",

  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "dist",
    filename: "bundle.js",    
  },

  resolve: {
    extensions: [".ts", ".js"],
    modules: ["src", "less", "node_modules"].map(x => path.resolve(x)),
  },

  module: {
    rules: [
      { test: /\.less$/i, use: ["css-loader", "less-loader"] },
      { test: /\.ts$/i, use: "ts-loader" },
      { test: /\.html$/i, use: "html-loader" },
    ]
  },  

  plugins: [
    new AureliaPlugin({
      dist: 'es2015',
      features: { svg: false, unparser: false, polyfills: "esnext" },
    }),
    new BabiliPlugin(),
  ],
};