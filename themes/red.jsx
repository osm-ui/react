
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { config as defaultThemeConfig } from './default';


export const config = {
    ...defaultThemeConfig,
};


const RedTheme = ({ children, ...rest }) => (
    <ThemeProvider theme={config} {...rest}>
        <div>
            {children}
        </div>
    </ThemeProvider>
);


RedTheme.propTypes = {
    children: React.PropTypes.node.isRequired,
};


export default RedTheme;
