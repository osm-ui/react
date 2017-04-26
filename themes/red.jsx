
import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import {
    config as defaultThemeConfig,
    StyledDiv,
} from './default';
import colors from '../colors';


export const config = {
    ...defaultThemeConfig,
    color: colors.white,
    backgroundColor: colors.red2,
    borderColor: colors.red1,
    dimmerBackgroundColor: colors.red2,
    loaderColor: colors.white,
    controlColor: colors.red1,
    hoverControlColor: colors.white,
};


const RedTheme = ({ children, ...rest }) => (
    <ThemeProvider theme={config}>
        <StyledDiv {...rest}>
            {children}
        </StyledDiv>
    </ThemeProvider>
);


RedTheme.propTypes = {
    children: PropTypes.node.isRequired,
};

RedTheme.displayName = 'RedTheme';

export default RedTheme;
