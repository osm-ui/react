import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classnames from 'classnames';

const StyledLabel = styled.label`
  color: ${props => props.theme.form.label.color};
  background-color: ${props => props.theme.form.label.backgroundColor};
  margin-bottom: 0.6rem;
  font-size: ${props => props.theme.form.label.fontSize};
  font-weight: ${props => props.theme.form.label.fontWeight};
`;

const Label = ({ htmlFor, className, ...props }) => {
  const classes = classnames(className, {
    'control-label': true
  });

  return <StyledLabel htmlFor={htmlFor} className={classes} {...props} />;
};

Label.propTypes = {
  htmlFor: PropTypes.string,
  className: PropTypes.string
};

Label.defaultProps = {
  htmlFor: '',
  className: ''
};

Label.displayName = 'Form.Label';

export default Label;
