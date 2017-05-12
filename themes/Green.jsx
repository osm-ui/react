
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
    backgroundColor: colors.green2,
    borderColor: colors.green1,
    dimmerBackgroundColor: colors.green2,
    loaderColor: colors.white,
    controlColor: colors.green1,
    hoverControlColor: colors.white,

    form: {
        button: {
            color: colors.white,
            backgroundColor: colors.green2,
            borderColor: colors.green5,
            hoverBackgroundColor: colors.green3,
            hoverBorderColor: colors.green5,
            focusBackgroundColor: colors.green3,
            focusBorderColor: colors.green5,
            activeBackgroundColor: colors.green3,
            activeBorderColor: colors.green5,

            primary: {
                color: colors.green2,
                backgroundColor: colors.white,
                borderColor: colors.white,
                hoverBackgroundColor: colors.gray5,
                hoverBorderColor: colors.gray5,
                focusBackgroundColor: colors.gray5,
                focusBorderColor: colors.gray5,
                activeBackgroundColor: colors.gray5,
                activeBorderColor: colors.gray5,
            },

            success: {
                color: colors.white,
                backgroundColor: colors.green3,
                borderColor: colors.green3,
                hoverBackgroundColor: colors.green1,
                hoverBorderColor: colors.green1,
                focusBackgroundColor: colors.green1,
                focusBorderColor: colors.green1,
                activeBackgroundColor: colors.green1,
                activeBorderColor: colors.green1,
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
