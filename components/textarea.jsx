import React from 'react';
import styled from 'styled-components';
import 'semantic-ui-css/semantic.min.css';
import { TextArea } from 'semantic-ui-react';
import InputBottomLabel from './inputBottomLabel';


const StyledTextArea = styled(TextArea)`
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
        bottomLabel,
        ...rest
    } = props;

    const bottomLabelElement = (
        <InputBottomLabel>{bottomLabel}</InputBottomLabel>
    );

    const textareaClassName = bottomLabel ? 'with-bottom-label' : '';

    return (
        <div>
            <StyledTextArea className={textareaClassName} {...rest} />
            {( bottomLabel ? bottomLabelElement : '' )}
        </div>
    );
};


Textarea.propTypes = {
    bottomLabel: React.PropTypes.string,
};

Textarea.defaultProps = {
    bottomLabel: '',
};


export default Textarea;
