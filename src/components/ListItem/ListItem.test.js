import React from 'react';
import { findByTestAttr, checkProps } from "../../utils";
import ListItem from "./index";
import { shallow } from 'enzyme';

describe('List Item', () => {

  describe('Checking proptypes', () => {

    it('Should not throw warning', () => {
      const expectProps = {
        title: 'Test title',
        desc: 'Test desc'
      };
      const propsError = checkProps(ListItem, expectProps);
      expect(propsError).toBeUndefined();
    })
  });

  describe('Renders', () => {
    const expectProps = {
      title: 'Test title',
      desc: 'Test desc'
    };

    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<ListItem {...expectProps} />);
    });

    it('Should render without error', () => {
      const component = findByTestAttr(wrapper, 'listItemComponent');
      expect(component.length).toBe(1);
    });

    it('Should render a title', () => {
      const title = findByTestAttr(wrapper, 'title');
      expect(title.length).toBe(1);
    });

    it('Should render a desc', () => {
      const desc = findByTestAttr(wrapper, 'desc');
      expect(desc.length).toBe(1);
    });
  });

  describe('Not render', () => {
    const wrapper = shallow(<ListItem />);

    it('Should not render a title', () => {
      const title = findByTestAttr(wrapper, 'title');
      expect(title.length).toBe(0);
    })
  });

});
