const path = require("path");
const { AureliaPlugin } = require("../webpack");

module.exports = {
  entry: { "main": "aurelia-bootstrapper" },

  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "dist",
    filename: "bundle.js",    
  },

  resolve: {
    extensions: [".ts", ".js"],
    modules: ["src", "node_modules"].map(x => path.resolve(x)),
    symlinks: false,
    alias: {
      "./dist/commonjs": "./dist/native-modules"
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
    new AureliaPlugin()    
  ],
};