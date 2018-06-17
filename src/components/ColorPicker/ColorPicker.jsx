import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { TwitterPicker } from 'react-color';

const ColorPicker = ({ className, onChange, ...rest }) => {
  const classes = classnames(className);

  return (
    <div className={classes} {...rest}>
      <TwitterPicker triangle="hide" onChangeComplete={onChange} />
    </div>
  );
};

ColorPicker.propTypes = {
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string
};

ColorPicker.defaultProps = {
  className: ''
};

ColorPicker.displayName = 'ColorPicker';

export default ColorPicker;
