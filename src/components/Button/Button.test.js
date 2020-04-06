import React from 'react';
import { findByTestAttr, checkProps } from "../../utils";
import SharedButton from "./index";
import { shallow } from 'enzyme';

describe('Shared Button', () => {

  describe('Checking proptypes', () => {

    it('Should not throw warning', () => {
      const expectProps = {
        buttonText: 'Test Button',
        emitEvent: () => {
        }
      };
      const propsError = checkProps(SharedButton, expectProps);
      expect(propsError).toBeUndefined();
    })
  });

  describe('Renders', () => {

    let wrapper;
    let mockFunc;

    beforeEach(() => {

      mockFunc = jest.fn();
      const expectProps = {
        buttonText: 'Test Button',
        emitEvent: mockFunc
      };
      wrapper = shallow(<SharedButton {...expectProps} />);
    });

    it('Should render a button', () => {
      const button = findByTestAttr(wrapper, 'button');
      expect(button.length).toBe(1);
    });

    it('Should emit callback func on click event', () => {
      const button = findByTestAttr(wrapper, 'button');
      button.simulate('click');
      const callback = mockFunc.mock.calls.length;
      expect(callback).toBe(1);
    });

    // it('Should not render a button', () => {
    //   const component = shallow(<SharedButton />);
    //   const button = findByTestAttr(component, 'button');
    //   expect(button.length).toBe(0);
    // })
  });


});
