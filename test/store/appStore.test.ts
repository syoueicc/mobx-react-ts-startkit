import {expect} from "chai";

import AppStore from '../../src/stores';
import {WorkItem} from '../../src/interfaces';

describe("AppStore测试用例", () => {
  const appStore = new AppStore();
  it("AppStore属性myWorks测试", () => {
    expect(appStore.myWorks.slice()).to.empty;
  });
  it("AppStore属性selectWork测试", () => {
    appStore.selectWork(new WorkItem(null, '测试'));
    expect(appStore.selectedWork.workName).to.equal("测试");
  })
})