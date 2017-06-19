import { Aurelia } from 'aurelia-framework';

export function configure(aurelia: Aurelia) {
  aurelia.use
         .standardConfiguration()
         .developmentLogging()
         .globalResources('converters/upper');
  aurelia.start().then(() => aurelia.setRoot());
}