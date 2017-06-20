import {observable} from 'mobx';

export default class AppStore {
  @observable public Hello:string = "World";

}