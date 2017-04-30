
import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import _ from 'lodash';
import {
    config as defaultThemeConfig,
    StyledDiv,
} from './Default';
import colors from '../colors';


export const config = _.merge({}, defaultThemeConfig, {
    color: colors.white,
    backgroundColor: colors.red2,
    borderColor: colors.red1,
    dimmerBackgroundColor: colors.red2,
    loaderColor: colors.white,
    controlColor: colors.red1,
    hoverControlColor: colors.white,

    form: {
        button: {
            color: colors.white,
            backgroundColor: colors.red2,
            borderColor: colors.red5,
            hoverBackgroundColor: colors.red3,
            hoverBorderColor: colors.red5,
            focusBackgroundColor: colors.red3,
            focusBorderColor: colors.red5,
            activeBackgroundColor: colors.red3,
            activeBorderColor: colors.red5,

            primary: {
                color: colors.red2,
                backgroundColor: colors.white,
                borderColor: colors.white,
                hoverBackgroundColor: colors.gray5,
                hoverBorderColor: colors.gray5,
                focusBackgroundColor: colors.gray5,
                focusBorderColor: colors.gray5,
                activeBackgroundColor: colors.gray5,
                activeBorderColor: colors.gray5,
            },

            danger: {
                color: colors.white,
                backgroundColor: colors.red1,
                borderColor: colors.red1,
                hoverBackgroundColor: colors.red3,
                hoverBorderColor: colors.red3,
                focusBackgroundColor: colors.red3,
                focusBorderColor: colors.red3,
                activeBackgroundColor: colors.red3,
                activeBorderColor: colors.red3,
            },
        },
    },
});


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
