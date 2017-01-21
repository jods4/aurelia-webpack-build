// This plugin tries to convert a ./dist/xxx/yyy request to the configured distribution if it exists.
// For example new DistPlugin('native-modules') will turn 
//    ./dist/commonjs/aurelia-framework.js 
// into 
//    ./dist/native-modules/aurelia-framework.js
// This is very similar to configuring 
//    resolve.alias = { './dist/commonjs': './dist/native-modules' }
// except it applies no matter the original dist and it does check existence of target dist.
// The configuration above will fail the build if a third party lib also uses ./dist/commonjs
// but does not include a ./dist/native-modules

const path = require('path');

module.exports = 
class DistPlugin {
  constructor(dist) {
    this.dist = `./dist/${dist}/`;
  }

  apply(resolver) {
    if (!this.dist) return;
    resolver.plugin("resolve-step", (type, request) => {      
      if (type !== "described-resolve") return;
      let rewritten = request.request.replace(/^\.\/dist\/[^/]+\//i, this.dist);
      if (rewritten === request.request) return;
      let probe = path.resolve(request.path, this.dist);
      try {
        if (!resolver.fileSystem.statSync(probe).isDirectory()) return;
      }
      catch (error) {
        return; // statSync throws if path does not exists
      }
      request.request = rewritten;
    });
  }
};