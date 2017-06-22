interface IWorkItem {
  id: string;
  workName: string;
  planTime: number;
  startTime: number;
  endTime: number;
}

export default class workItemClass implements IWorkItem {
  constructor(
    public id: string = '',
    public workName: string = '',
    public planTime: number = new Date().getTime(),
    public startTime: number = new Date().getTime(),
    public endTime: number = new Date().getTime()
  ) {
    if(!this.id) {
      this.id = Math.random().toString(36).substring(2);
    }
  }
}