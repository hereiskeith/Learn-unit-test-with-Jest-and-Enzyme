import React from 'react';
import { testStore, findByTestAttr } from "./utils";
import { shallow } from 'enzyme';
import App from "./App";

const setup = initialState => {
  const store = testStore(initialState);
  const wrapper = shallow(<App store={store} />).childAt(0).dive();
  // console.log(wrapper.debug());
  return wrapper;
};

describe('App test', () => {

  const initialState = {
    post:
      [{
        id: 1,
        title: 'Example title 1',
        body: 'Example desc'
      }, {
        id: 2,
        title: 'Example title 2',
        body: 'Example desc'
      }, {
        id: 3,
        title: 'Example title 3',
        body: 'Example desc'
      }
    ]
  };

  let wrapper;
  beforeEach(() => {
    wrapper = setup(initialState);
  });

  it('Should render without errors', () => {
    const appComponent = findByTestAttr(wrapper, 'appComponent');
    expect(appComponent.length).toBe(1)
  })



});