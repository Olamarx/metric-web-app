import React from 'react';
import PropTypes from 'prop-types';

function Spinner({ message }) {
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader">
        {message}
      </div>
    </div>
  );
}

Spinner.propTypes = {
  message: PropTypes.string,
};

Spinner.defaultProps = {
  message: 'Loading...',
};

export default Spinner;
