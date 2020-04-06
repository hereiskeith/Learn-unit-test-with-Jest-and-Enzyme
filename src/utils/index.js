import checkPropTypes from 'check-prop-types';
import { createStore, applyMiddleware } from "redux";
import { middlewares } from "../store";
import reducer from '../reducer';

export const findByTestAttr = (component, attr) => {
  const wrapper = component.find(`[data-test='${attr}']`);
  return wrapper;
};

export const checkProps = (component, expectProps) => {
  const propsErr = checkPropTypes(component.propTypes, expectProps, 'props', component.name);
  return propsErr;
};

export const testStore = initialState => {
  const createStoreWithMiddlewares = applyMiddleware(...middlewares)(createStore);
  return createStoreWithMiddlewares(reducer, initialState);
}

