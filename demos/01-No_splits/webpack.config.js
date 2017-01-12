const path = require("path");
const { AureliaPlugin } = require("../Webpack");

module.exports = {
  entry: "main",

  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "dist",
    filename: "bundle.js",    
  },

  resolve: {
    extensions: [".ts", ".js"],
    modules: ["src", "node_modules"]
  },

  module: {
    rules: [
      { test: /\.less$/i, use: ["style-loader", "css-loader", "less-loader"] },
      { test: /\.ts$/i, use: "ts-loader" },
      { test: /\.html$/i, use: "html-loader" },
      
      // TODO: replace with PLATFORM.moduleName() plugin
      // This rule ensures dynamic dependencies of aurelia are properly included
      {
        test: /\.[tj]s$/i,
        include: /node_modules[\\/]aurelia-(?!templating-resources|templating-router)/i,
        use: {
          loader: 'webpack-dependency-suite/loaders/list-based-require-loader',
          options: { 
            packagePropertyPath: 'aurelia.build.resources',
            enableGlobbing: true,
            rootDir: path.resolve(),
          }
        }
      }
    ]
  },  

  plugins: [
    new AureliaPlugin({ includeAll: "src" }),
  ],
};