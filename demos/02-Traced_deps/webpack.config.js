const path = require('path');
const AureliaDependenciesPlugin = require('../webpack/AureliaDependenciesPlugin');
const ExtensionDependenciesPlugin = require('../webpack/ExtensionDependenciesPlugin');
const HtmlDependenciesPlugin = require('../webpack/HtmlDependenciesPlugin');
const PreserveModuleNamePlugin = require('../webpack/PreserveModuleNamePlugin');

module.exports = {
  entry: 'main',

  output: {
    path: __dirname,
    publicPath: '/',
    filename: "bundle.js",    
  },

  resolve: {
    extensions: ['.ts', '.js'],
    modules: ['src', 'node_modules']
  },

  module: {
    rules: [
      { test: /\.less$/i, use: ["style-loader", "css-loader", "less-loader"] },
      { test: /\.ts$/i, use: "ts-loader" },
      { test: /\.html$/i, use: ["html-loader", "../webpack/html-requires-loader"] },
      
      // TODO: when aurelia code is instrumented with PLATFORM.moduleName() this won't be necessary anymore
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
    // This plugin traces dependencies in code that are wrapped in PLATFORM.moduleName() calls
    new AureliaDependenciesPlugin(),
    // This plugin adds dependencies traced by html-requires-loader
    new HtmlDependenciesPlugin(),
    // This plugin looks for companion files by swapping extensions,
    // e.g. the view of a ViewModel. @useView and co should use PLATFORM.moduleName().
    new ExtensionDependenciesPlugin('src/**/*.ts', '.html'),
    // This plugin preserves module names for dynamic loading by aurelia-loader
    new PreserveModuleNamePlugin()
  ],

  performance: { hints: false },
};