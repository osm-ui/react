import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import 'semantic-ui-css/semantic.min.css';
import { TextArea } from 'semantic-ui-react';
import themes from '../themes';


const StyledTextArea = styled(TextArea)`
    &&&,
    &&&:hover,
    &&&:focus {
        border-radius: ${props => props.theme.inputBorderRadius};
    }
`;

const Textarea = (props) => {
    const { theme: themeName, ...rest } = props;

    return (
        <ThemeProvider theme={themes[themeName]}>
            <StyledTextArea {...rest} />
        </ThemeProvider>
    );
};


Textarea.propTypes = {
    theme: React.PropTypes.string,
};

Textarea.defaultProps = {
    theme: 'default',
};


export default Textarea;
