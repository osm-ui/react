
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { config as defaultThemeConfig } from './default';


export const config = {
    ...defaultThemeConfig,
};


const RedTheme = props => (
    <ThemeProvider theme={config} {...props} />
);


RedTheme.propTypes = {
    children: React.PropTypes.node.isRequired,
};


export default RedTheme;
