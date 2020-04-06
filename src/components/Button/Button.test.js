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
    it('Should render a button', () => {
      const expectProps = {
        buttonText: 'Test Button',
        emitEvent: () => {
        }
      };
      const component = shallow(<SharedButton {...expectProps} />);
      const button = findByTestAttr(component, 'button');
      expect(button.length).toBe(1);
    });

    it('Should not render a button', () => {
      const component = shallow(<SharedButton />);
      const button = findByTestAttr(component, 'button');
      expect(button.length).toBe(0);
    })
  });


});
