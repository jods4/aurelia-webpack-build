import '../style.less';
import { Router } from 'aurelia-router';

export class AppViewModel {
  router: Router;

  configureRouter(config, router) {
    this.router = router;
    config.map([
      { route: '', name: 'hello', moduleId: PLATFORM.moduleName('page-hello') },
      { route: 'about', name: 'about', moduleId: PLATFORM.moduleName('page-about') },
    ]);
  }
}