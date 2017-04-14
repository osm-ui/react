
import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { config as defaultThemeConfig } from './default';
import { white, red, darkRed } from '../colors';


export const config = {
    ...defaultThemeConfig,
    color: white,
    backgroundColor: red,
    borderColor: darkRed,
    dimmerBackgroundColor: red,
    loaderColor: white,
    dividerColor: 'rgba(255, 255, 255, 0.4)',
};


const RedTheme = ({ children, ...rest }) => (
    <ThemeProvider theme={config} {...rest}>
        <div>
            {children}
        </div>
    </ThemeProvider>
);


RedTheme.propTypes = {
    children: PropTypes.node.isRequired,
};


export default RedTheme;
