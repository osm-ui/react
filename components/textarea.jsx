import React from 'react';
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

    &&&.with-bottom-label,
    &&&.with-bottom-label:hover,
    &&&.with-bottom-label:focus {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
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
    label: React.PropTypes.string,
    labelPosition: React.PropTypes.string,
};

Textarea.defaultProps = {
    label: '',
    labelPosition: '',
};


export default Textarea;
