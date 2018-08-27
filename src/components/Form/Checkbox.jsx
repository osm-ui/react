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
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  margin: 0;

  & + label {
    font-size: ${props => props.theme.form.checkbox[props.size].size};
    line-height: ${props => props.theme.form.checkbox[props.size].lineHeight};
    font-weight: ${props => props.theme.form.label.fontWeight};
    padding-left: ${props => props.theme.form.checkbox[props.size].paddingLeft};
    cursor: pointer;
    transition: opacity 0.2s ease-in-out;

    &::before,
    &::after {
      display: inline-block;
      position: absolute;
      left: 0;
      top: ${props => props.theme.form.checkbox[props.size].top};
      border: 1px solid #ccc;
      border-radius: 3px;
      border-color: ${props => props.theme.form.checkbox.borderColor};
      content: '';
      width: ${props => props.theme.form.checkbox[props.size].size};
      height: ${props => props.theme.form.checkbox[props.size].size};
    }

    &::after {
      border-color: transparent;
      transform: scale(0);
      top: ${props => props.theme.form.checkbox[props.size].innerTop};
      content: '\f00c';
      color: ${props => props.theme.form.checkbox.color};
      font-family: 'Font Awesome 5 Free';
      font-weight: 600;
      font-size: ${props => props.theme.form.checkbox[props.size].innerSize};
      text-align: center;
      transition: transform 0.2s cubic-bezier(0.8, -0.33, 0.2, 1.33);
    }
  }

  &:checked + label::after {
    transform: scale(1);
    transition: transform 0.2s cubic-bezier(0.8, -0.33, 0.2, 1.33);
  }

  &:disabled + label,
  &:disabled + label::after {
    opacity: ${props => props.theme.form.checkbox.disabledOpacity};
    cursor: not-allowed;
  }
`;

const Checkbox = ({ id, label, className, ...props }) => {
  return (
    <Container className={className} {...props}>
      <StyledCheckbox id={id} {...props} />
      <Label htmlFor={id}>{label}</Label>
    </Container>
  );
};

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  label: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string
};

Checkbox.defaultProps = {
  label: '',
  size: 'md',
  disabled: false,
  className: ''
};

Checkbox.displayName = 'Form.Checkbox';

export default Checkbox;
