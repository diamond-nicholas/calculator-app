import React from 'react';
import PropTypes from 'prop-types';
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
  result: PropTypes.string,
};
Display.defaultProps = {
  result: '0',
};

export default Display;
