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

    &:focus,
    &.form-control:focus {
        opacity: ${props => props.theme.form.input.focusOpacity};
        background-color: ${props => props.theme.form.input.focusBackgroundColor};
        border-color: ${props => props.theme.form.input.focusBorderColor};
        box-shadow: ${props => props.theme.form.input.focusBoxShadow};
    }
`;


const Input = ({
    type,
    disabled,
    hint,
    className,
    ...props
}) => (
    <div>
        <StyledInput
            className={classnames(className, 'form-control')}
            type={type}
            disabled={disabled}
            {...props}
        />
        { hint && <InputHint>{hint}</InputHint> }
    </div>
);


Input.propTypes = {
    type: PropTypes.string,
    disabled: PropTypes.bool,
    hint: PropTypes.string,
    className: PropTypes.string,
};

Input.defaultProps = {
    type: 'text',
    disabled: false,
    hint: '',
    className: '',
};

Input.displayName = 'Form.Input';

export default Input;
