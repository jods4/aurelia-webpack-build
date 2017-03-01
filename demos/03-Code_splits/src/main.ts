import { Aurelia, PLATFORM } from 'aurelia-framework';

export function configure(aurelia: Aurelia) {
  aurelia.use
         .standardConfiguration()
         .developmentLogging()
         .globalResources(PLATFORM.moduleName('converters/upper'));
  aurelia.start().then(() => aurelia.setRoot(PLATFORM.moduleName('app')));
}