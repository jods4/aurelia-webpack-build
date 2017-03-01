import '../style.less';
import { PLATFORM } from 'aurelia-framework';
import { Router } from 'aurelia-router';

export class AppViewModel {
  router: Router;

  configureRouter(config, router) {
    this.router = router;
    config.map([
      { route: '', name: 'hello', moduleId: PLATFORM.moduleName('page-hello', 'hello') },
      { route: 'about', name: 'about', moduleId: PLATFORM.moduleName('page-about', 'about') },
    ]);
  }
}