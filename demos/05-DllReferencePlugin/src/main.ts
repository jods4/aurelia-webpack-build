import { PLATFORM } from 'aurelia-pal';
import { Aurelia } from 'aurelia-framework';

export function configure(aurelia: Aurelia) {
  aurelia.use
         .standardConfiguration()
         .developmentLogging()
         .globalResources(PLATFORM.moduleName('converters/upper'));
  aurelia.start().then(() => aurelia.setRoot(PLATFORM.moduleName('app')));
}