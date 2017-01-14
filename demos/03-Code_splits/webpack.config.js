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
    modules: ["src", "node_modules"]
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
      
      // TODO: when aurelia code is instrumented with PLATFORM.moduleName() this won"t be necessary anymore
      // This rule ensures dynamic dependencies of aurelia are properly included
      {
        test: /\.[tj]s$/i,
        include: /node_modules[\\/]aurelia-(?!templating-resources|templating-router)/i,
        use: {
          loader: "webpack-dependency-suite/loaders/list-based-require-loader",
          options: { 
            packagePropertyPath: "aurelia.build.resources",
            enableGlobbing: true,
            rootDir: path.resolve(),
          }
        }
      }
    ]
  },  

  plugins: [
    new AureliaPlugin(),
    new ModuleDependenciesPlugin({ 
      "aurelia-bootstrapper": "main" 
    }),
  ],
};