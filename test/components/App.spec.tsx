import * as React from "react";
// import App from '../../src/components/App';
// import AppStore from '../../src/stores';
import { shallow } from 'enzyme';
import {expect} from 'chai';

// const store = new AppStore();
describe("Component test", () => {
  // const store = new AppStore();
  const wrapper = shallow(<div></div>);
  it('测试REACT组件', () => {
    expect(wrapper.type()).to.eql("div");
  })
  
})