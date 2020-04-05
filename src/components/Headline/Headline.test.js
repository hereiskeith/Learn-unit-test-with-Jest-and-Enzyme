import React from 'react';
import { shallow } from 'enzyme';
import Headline from "./index";
import { findByTestAttr } from "../../Utils";

const setup = (props = {}) => {
  const component = shallow(<Headline {...props} />);
  return component;
};

describe('Headline Component', () => {

  describe('Have props', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        header: 'Test Header',
        desc: 'Test description'
      };
      wrapper = setup(props);
    });

    it('Should render without errors', () => {
      let headline = findByTestAttr(wrapper, 'headlineComponent');
      expect(headline.length).toBe(1);
    });

    it('Should render a H1', () => {
      let h1 = findByTestAttr(wrapper, 'header');
      expect(h1.length).toBe(1);
    });

    it('Should render a desc', () => {
      let desc = findByTestAttr(wrapper, 'desc');
      expect(desc.length).toBe(1);
    })
  });

  describe('Have no prop', () => {

    let wrapper;
    beforeEach(() => {
      wrapper = setup();
    });

    it('Should render without errors', () => {
      let headline = findByTestAttr(wrapper, 'headlineComponent');
      expect(headline.length).toBe(0);
    });
  });

});