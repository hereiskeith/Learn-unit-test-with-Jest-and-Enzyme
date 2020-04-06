import React from 'react';
import PropTypes from 'prop-types';

const SharedButton = props => {

  const { buttonText, emitEvent } = props;

  if(!buttonText) {
    return null
  }

  return (
    <button onClick={() => emitEvent ? emitEvent() : null} data-test='button'>
      {buttonText}
    </button>
  )
};

SharedButton.propTypes = {
  buttonText: PropTypes.string,
  emitEvent: PropTypes.func
};



export default SharedButton;