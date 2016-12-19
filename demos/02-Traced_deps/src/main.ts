import 'aurelia-bootstrapper';
import { Aurelia } from 'aurelia-framework';

// HACK: this string is in my starting index.html file :(
PLATFORM.moduleName('main');

export function configure(aurelia: Aurelia) {
  aurelia.use
         .standardConfiguration()
         .developmentLogging()
         .globalResources(PLATFORM.moduleName('converters/upper'));
  aurelia.start().then(() => aurelia.setRoot(PLATFORM.moduleName('app')));
}