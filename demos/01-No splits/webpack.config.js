const path = require('path');
const GlobDependenciesPlugin = require('./GlobDependenciesPlugin');
const { MappedModuleIdsPlugin } = require('webpack-dependency-suite');

module.exports = {
  entry: 'main',

  output: {
    path: __dirname,
    publicPath: '/',
    filename: "bundle.js",    
  },

  resolve: {
    extensions: ['.ts', '.js'],
    modules: ['src', 'node_modules'],
    plugins: [ ]
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

    // This preserves module names so that aurelia-loader can request them properly
    // TODO: simplify!    
    // TODO: LESS dependency results in a seemingly duplicated module (but not quite when looking in bundle.js)
    //       Is that expected? If not, what is wrong?
    new MappedModuleIdsPlugin({
      appDir: path.resolve('src'),
      prefixLoaders: [
        {loader: 'less-loader', prefix: false},
        {loader: 'css-loader', prefix: false},
        {loader: 'style-loader', prefix: false},
      ],
      logWhenRawRequestDiffers: true,
      dotSlashWhenRelativeToAppDir: false,
      beforeLoadersTransform: (moduleId) => {
        if (!moduleId.startsWith('aurelia-')) return moduleId
        return moduleId
          .replace('/dist/native-modules', '')
          .replace('/dist/commonjs', '')
      },

      afterExtensionTrimmingTransform: (moduleId) => {
        if (!moduleId.startsWith('aurelia-')) return moduleId
        const split = moduleId.split('/')
        if (split.length === 2 && split[0] === split[1]) {
          // aurelia uses custom main path
          return split[0]
        }
        return moduleId
      }
    }),
  ],

  performance: { hints: false },
};