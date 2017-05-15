import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classnames from 'classnames';
import InputHint from './InputHint';


const StyledTextArea = styled.textarea`
    opacity: ${props => props.theme.form.input.opacity};
    resize: ${props => props.resize};
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


const Textarea = ({
    rows,
    disabled,
    hint,
    className,
    ...props
}) => (
    <div>
        <StyledTextArea
            className={classnames(className, 'form-control')}
            rows={rows}
            disabled={disabled}
            {...props}
        />
        { hint && <InputHint>{hint}</InputHint> }
    </div>
);


Textarea.propTypes = {
    rows: PropTypes.number,
    disabled: PropTypes.bool,
    hint: PropTypes.string,
    resize: PropTypes.oneOf(['none', 'vertical', 'horizontal']),
    className: PropTypes.string,
};

Textarea.defaultProps = {
    rows: 6,
    disabled: false,
    hint: '',
    resize: 'vertical',
    className: '',
};

Textarea.displayName = 'Form.Textarea';

export default Textarea;
