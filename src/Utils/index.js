import checkPropTypes from 'check-prop-types';

export const findByTestAttr = (component, attr) => {
  const wrapper = component.find(`[data-test='${attr}']`);
  return wrapper;
};

export const checkProps = (component, expectProps) => {
  const propsErr = checkPropTypes(component.propTypes, expectProps, 'props', component.name);
  return propsErr;
}

