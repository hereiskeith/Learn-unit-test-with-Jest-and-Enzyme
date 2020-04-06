import React from 'react';
import { shallow } from 'enzyme';
import Header from "./index";
import { findByTestAttr } from "../../utils";

const setup = (props = {}) => {
  const component = shallow(<Header {...props} />);
  return component;
};

describe('Header Component', () => {

  let component;
  beforeAll(() => {
    component = setup();
  })

  it('Should render without error', () => {
    // console.log(component.debug());
    const wrap = findByTestAttr(component, 'headerComponent');
    expect(wrap.length).toBe(1);
  });

  it('Should render a logo', () => {
    const logo = findByTestAttr(component, 'logoIMG');
    expect(logo.length).toBe(1);
  });
});

