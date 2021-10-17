import React from 'react';
import propTypes from 'prop-types';
import '../Styles/Display.css';

const Display = (props) => {
  const { result } = props;
  return (
    <div>
      <h2>{result}</h2>
    </div>
  );
};

Display.propTypes = {
  result: propTypes.string,
};
Display.defaultProps = {
  result: 0,
};

export default Display;
