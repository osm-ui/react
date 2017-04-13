import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import 'semantic-ui-css/semantic.min.css';
import { TextArea as SUITextArea } from 'semantic-ui-react';
import InputBottomLabel from './inputBottomLabel';


const StyledTextArea = styled(SUITextArea)`
    &&&,
    &&&:hover,
    &&&:focus {
        border-radius: ${props => props.theme.form.input.borderRadius};
    }
`;


const Textarea = (props) => {
    const {
        label,
        labelPosition,
        ...rest
    } = props;

    let bottomLabel;

    if (labelPosition !== 'bottom') {
        rest.label = label;
        rest.labelPosition = labelPosition;
        bottomLabel = '';
    }
    else {
        bottomLabel = (
            <InputBottomLabel>{label}</InputBottomLabel>
        );
    }

    return (
        <div>
            <StyledTextArea {...rest} />
            {bottomLabel}
        </div>
    );
};


Textarea.propTypes = {
    ...SUITextArea.propTypes,
    label: PropTypes.string,
    labelPosition: PropTypes.string,
};

Textarea.defaultProps = {
    ...SUITextArea.defaultProps,
    label: '',
    labelPosition: '',
};


export default Textarea;
