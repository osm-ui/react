
import React from 'react';
import { ThemeProvider } from 'styled-components';


export const config = {
    form: {
        input: {
            borderRadius: 0,
        },
    },
};


const DefaultTheme = props => (
    <ThemeProvider theme={config} {...props} />
);


DefaultTheme.propTypes = {
    children: React.PropTypes.node.isRequired,
};


export default DefaultTheme;
