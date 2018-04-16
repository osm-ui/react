import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classnames from 'classnames';
import InputHint from './InputHint';

const StyledInput = styled.input`
  opacity: ${props => props.theme.form.input.opacity};
  background-color: ${props => props.theme.form.input.backgroundColor};
  border-color: ${props => props.theme.form.input.borderColor};
  border-width: ${props => props.theme.form.input.borderWidth};
  border-radius: ${props => props.theme.form.input.borderRadius};
  box-shadow: ${props => props.theme.form.input.boxShadow};

  &.form-control {
    height: 100%;
  }

  &:focus,
  &.form-control:focus {
    opacity: ${props => props.theme.form.input.focusOpacity};
    background-color: ${props => props.theme.form.input.focusBackgroundColor};
    border-color: ${props => props.theme.form.input.focusBorderColor};
    box-shadow: ${props => props.theme.form.input.focusBoxShadow};
  }

  &:disabled {
    opacity: ${props => props.theme.form.input.disabledOpacity};
  }
`;

const Input = ({
  type,
  disabled,
  hint,
  className,
  innerRef,
  style,
  ...props
}) => (
  <div className="input-container" style={style}>
    <StyledInput
      className={classnames(className, 'form-control')}
      type={type}
      disabled={disabled}
      innerRef={innerRef}
      {...props}
    />
    {hint && <InputHint disabled={disabled}>{hint}</InputHint>}
  </div>
);

Input.propTypes = {
  type: PropTypes.string,
  disabled: PropTypes.bool,
  hint: PropTypes.string,
  innerRef: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object
};

Input.defaultProps = {
  type: 'text',
  disabled: false,
  hint: '',
  innerRef: null,
  className: '',
  style: null
};

Input.displayName = 'Form.Input';
Input.style = StyledInput;

export default Input;
