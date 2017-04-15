import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import InputHint from './inputHint';


const StyledTextArea = styled.textarea`
    opacity: ${props => props.theme.form.input.opacity};
    background-color: ${props => props.theme.form.input.backgroundColor};
    box-shadow: ${props => props.theme.form.input.boxShadow};
    border-radius: ${props => props.theme.form.input.borderRadius};
    resize: ${props => props.resize};

    &:focus,
    &.form-control:focus {
        opacity: ${props => props.theme.form.input.focusedOpacity};
        background-color: ${props => props.theme.form.input.focusedBackgroundColor};
        box-shadow: ${props => props.theme.form.input.focusedBoxShadow};
    }
`;


const Textarea = ({
    rows,
    disabled,
    hint,
    ...props
}) => (
    <div>
        <StyledTextArea
            className="form-control"
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
};

Textarea.defaultProps = {
    rows: 6,
    disabled: false,
    hint: '',
    resize: 'vertical',
};


export default Textarea;
