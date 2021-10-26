/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { buttonName, clickHandler } = props;
  const handleClick = () => (clickHandler(buttonName));
  return (
    <div>
      <button type="button" onClick={handleClick}>{buttonName}</button>
    </div>
  );
};

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
};
Button.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default Button;
