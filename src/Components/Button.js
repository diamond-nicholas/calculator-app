/* eslint-disable no-unused-vars */
import React from 'react';
import propTypes from 'prop-types';

const Button = (props) => {
  const { buttonName, clickHandler } = props;
  const handleClick = () => (clickHandler(buttonName));
  return (
    <div>
      {buttonName}
    </div>
  );
};

Button.propTypes = {
  buttonName: propTypes.string.isRequired,
};

export default Button;
