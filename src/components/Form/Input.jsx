import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classnames from 'classnames';
import InputHint from './InputHint';

const StyledInput = styled.input`
  opacity: ${p => p.theme.form.input.opacity};
  background-color: ${p => p.theme.form.input.backgroundColor};
  border-style: solid;
  border-color: ${p => p.theme.form.input.borderColor};
  border-width: ${p => p.theme.form.input.borderWidth};
  border-radius: ${p => p.theme.form.input.borderRadius};
  box-shadow: ${p => p.theme.form.input.boxShadow};
  padding: 0.6rem 0.8rem;
  width: 100%;
  font-size: ${p => p.theme.form.input.fontSize};
  color: ${p => p.theme.color};

  /* prettier-ignore */
  ${p => (p.hasHint ? 'border-bottom-left-radius: 0;' : '')}
  ${p => (p.hasHint ? 'border-bottom-right-radius: 0;' : '')}

  &:focus {
    opacity: ${p => p.theme.form.input.focusOpacity};
    background-color: ${p => p.theme.form.input.focusBackgroundColor};
    border-color: ${p => p.theme.form.input.focusBorderColor};
    box-shadow: ${p => p.theme.form.input.focusBoxShadow};
  }

  &:disabled {
    opacity: ${p => p.theme.form.input.disabledOpacity};
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
      className={classnames(className, 'input')}
      type={type}
      disabled={disabled}
      innerRef={innerRef}
      hasHint={!!hint}
      {...props}
    />
    {!!hint && <InputHint disabled={disabled}>{hint}</InputHint>}
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
