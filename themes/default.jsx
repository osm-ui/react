
import React from 'react';
import { ThemeProvider } from 'styled-components';


export const config = {
    form: {
        input: {
            borderRadius: 0,
        },
    },
};


const DefaultTheme = ({ children, ...rest }) => (
    <ThemeProvider theme={config} {...rest}>
        <div>
            {children}
        </div>
    </ThemeProvider>
);


DefaultTheme.propTypes = {
    children: React.PropTypes.node.isRequired,
};


export default DefaultTheme;
