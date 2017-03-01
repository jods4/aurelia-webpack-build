import { Aurelia, PLATFORM, ViewEngine } from 'aurelia-framework';

export function configure(aurelia: Aurelia) {
  aurelia.use
         .standardConfiguration()
         .developmentLogging()
         .globalResources(PLATFORM.moduleName('converters/upper'))
         .postTask(config => {
            let viewEngine = config.container.get(ViewEngine);
            viewEngine._pluginMap['.less'] = viewEngine._pluginMap['.css'];
         });  

  aurelia.start().then(() => aurelia.setRoot(PLATFORM.moduleName('app')));
}