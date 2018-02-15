import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Label from './Label';

const Container = styled.div`
  position: relative;
  color: ${props => props.theme.form.label.color};
  background-color: ${props => props.theme.form.label.backgroundColor};
  border-color: ${props => props.theme.form.label.borderColor};
  height: ${props => props.theme.form.checkbox[props.size].height};
`;

const StyledRadio = styled.input.attrs({
  type: 'radio',
  checked: props => props.checked,
  disabled: props => props.disabled
})`
  opacity: 0;
  width: 0;
  height: 0;
  margin: 0;

  & + label {
    font-size: ${props => props.theme.form.radio[props.size].size};
    line-height: ${props => props.theme.form.radio[props.size].size};
    font-weight: ${props => props.theme.form.label.fontWeight};
    padding-left: ${props => props.theme.form.radio[props.size].paddingLeft};
    cursor: pointer;
    transition: opacity 0.2s ease-in-out;

    &:before,
    &:after {
      display: inline-block;
      position: absolute;
      left: 0;
      top: ${props => props.theme.form.radio[props.size].top};
      border: 1px solid #ccc;
      border-radius: 50%;
      border-color: ${props => props.theme.form.radio.borderColor};
      content: '';
      width: ${props => props.theme.form.radio[props.size].size};
      height: ${props => props.theme.form.radio[props.size].size};
    }

    &:after {
      border: none;
      padding-left: 0.5px;
      content: ' ';
      width: ${props => props.theme.form.radio[props.size].innerSize};
      height: ${props => props.theme.form.radio[props.size].innerSize};
      top: ${props => props.theme.form.radio[props.size].innerTop};
      left: ${props => props.theme.form.radio[props.size].innerLeft};
      background-color: ${props => props.theme.form.radio.backgroundColor};
      transform: scale(0);
      transition: transform 0.3s cubic-bezier(0.8, -0.33, 0.2, 1.33);
    }
  }

  &:checked + label:after {
    transform: scale(1);
    transition: transform 0.3s cubic-bezier(0.8, -0.33, 0.2, 1.33);
  }

  &:disabled + label,
  &:disabled + label:after {
    opacity: 0.3;
    cursor: not-allowed;
  }
`;

const Radio = ({ id, label, className, ...props }) => {
  return (
    <Container className={className} {...props}>
      <StyledRadio id={id} {...props} />
      <Label htmlFor={id}>{label}</Label>
    </Container>
  );
};

Radio.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  label: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string
};

Radio.defaultProps = {
  label: '',
  size: 'md',
  disabled: false,
  className: ''
};

Radio.displayName = 'Form.Radio';

export default Radio;
