import React from 'react';
import styled from 'styled-components';
import 'semantic-ui-css/semantic.min.css';
import { Button as SUIButton } from 'semantic-ui-react';


const StyledButton = styled(SUIButton)`
    &&&,
    &&&:hover,
    &&&:focus {
        border-radius: ${props => props.theme.form.input.borderRadius};
    }
`;


const Button = props => (
    <StyledButton {...props} />
);


Button.propTypes = {
    ...SUIButton.propTypes,
};


Button.defaultProps = {
    ...SUIButton.defaultProps,
};


export default Button;
