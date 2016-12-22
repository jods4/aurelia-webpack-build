const path = require('path');
const { GlobDependenciesPlugin, PreserveModuleNamePlugin } = require('../Webpack');

module.exports = {
  entry: 'main',

  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "dist",
    filename: "bundle.js",    
  },

  resolve: {
    extensions: ['.ts', '.js'],
    modules: ['src', 'node_modules'],
  },

  module: {
    rules: [
      { test: /\.less$/i, use: ["style-loader", "css-loader", "less-loader"] },
      { test: /\.ts$/i, use: "ts-loader" },
      { test: /\.html$/i, use: 'html-loader' },
      
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
    // This plugin ensures that everything in /src is included in the bundle.
    // This prevents splitting in several chunks but is super easy to use and setup,
    // no change in existing code or PLATFORM.nameModule() calls are required.
    new GlobDependenciesPlugin('main', 'src'),
    // This plugin preserves module names for dynamic loading by aurelia-loader
    new PreserveModuleNamePlugin()
  ],

  performance: { hints: false },
};