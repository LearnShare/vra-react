import React from 'react';
import PropTypes from 'prop-types';

function HelloWorld({
  msg,
}) {
  return (
    <h1>{ msg }</h1>
  );
}

HelloWorld.propTypes = {
  msg: PropTypes.string,
};

HelloWorld.defaultProps = {
  msg: '',
};

export default HelloWorld;
