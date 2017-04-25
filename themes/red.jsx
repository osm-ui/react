
import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { config as defaultThemeConfig } from './default';
import colors from '../colors';


export const config = {
    ...defaultThemeConfig,
    color: colors.white,
    backgroundColor: colors.red2,
    borderColor: colors.red1,
    dimmerBackgroundColor: colors.red2,
    loaderColor: colors.white,
    dividerColor: 'rgba(255, 255, 255, 0.4)',
};


const RedTheme = ({ children, ...rest }) => (
    <ThemeProvider theme={config}>
        <div {...rest}>
            {children}
        </div>
    </ThemeProvider>
);


RedTheme.propTypes = {
    children: PropTypes.node.isRequired,
};

RedTheme.displayName = 'RedTheme';

export default RedTheme;
