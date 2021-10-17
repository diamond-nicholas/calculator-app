import React from 'react';
import propTypes from 'prop-types';

const Button = (props) => {
  const { buttonName } = props;
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
