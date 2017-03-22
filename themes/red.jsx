
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { config as defaultThemeConfig } from './default';


export const config = {
    ...defaultThemeConfig,
};


export default props => (
    <ThemeProvider theme={config} {...props} />
);
