import '../style.less';

export class AppViewModel {
  name: string = '';
  get welcome() {
    return this.name;
  }  
}