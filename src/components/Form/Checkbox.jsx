import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Label from './Label';

const Container = styled.div`
  position: relative;
  color: ${props => props.theme.form.label.color};
  background-color: ${props => props.theme.form.label.backgroundColor};
  border-color: ${props => props.theme.form.label.borderColor};
`;

const StyledCheckbox = styled.input.attrs({
  type: 'checkbox',
  checked: props => props.checked,
  disabled: props => props.disabled
})`
  opacity: 0;
  width: 0;
  height: 0;
  margin: 0;

  & + label {
    font-size: ${props => props.theme.form.label.fontSize};
    line-height: ${props => props.theme.form.label.fontSize};
    font-weight: ${props => props.theme.form.label.fontWeight};
    padding-left: 2.5rem;
    cursor: pointer;

    &:before,
    &:after {
      display: inline-block;
      position: absolute;
      left: 0;
      top: 0.4rem;
      border: 1px solid #ccc;
      border-radius: 3px;
      border-color: ${props => props.theme.form.checkbox.borderColor};
      content: '';
      width: 1.7rem;
      height: 1.7rem;
      transition: border 0.15s ease-in-out, color 0.15s ease-in-out;
    }
  }

  &:checked + label:after {
    padding-left: 0.5px;
    content: '\f00c';
    font-family: FontAwesome;
    font-size: 1.4rem;
  }

  &:disabled + label,
  &:disabled + label:after {
    opacity: 0.3;
    cursor: not-allowed;
  }
`;

const Checkbox = ({ id, label, className, ...props }) => {
  return (
    <Container className={className}>
      <StyledCheckbox id={id} {...props} />
      <Label htmlFor={id}>{label}</Label>
    </Container>
  );
};

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string
};

Checkbox.defaultProps = {
  label: '',
  disabled: false,
  className: ''
};

Checkbox.displayName = 'Form.Checkbox';

export default Checkbox;
