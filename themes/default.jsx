
import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import colors from '../colors';


export const config = {
    color: colors.anthracite1,
    backgroundColor: colors.white,
    borderColor: colors.gray1,
    dimmerBackgroundColor: colors.white,
    loaderColor: colors.gray1,
    borderStyle: 'solid',
    borderWidth: '4px',
    borderRadius: 0,
    dividerColor: colors.gray3,

    form: {
        button: {
            borderRadius: 0,

            backgroundColor: colors.white,
            borderColor: colors.gray3,
            hoverBackgroundColor: colors.gray5,
            hoverBorderColor: colors.gray3,
            focusBackgroundColor: colors.gray5,
            focusBorderColor: colors.gray3,
            activeBackgroundColor: colors.gray5,
            activeBorderColor: colors.gray3,

            primary: {
                color: colors.white,
                backgroundColor: colors.blue2,
                borderColor: colors.blue2,
                hoverBackgroundColor: colors.blue3,
                hoverBorderColor: colors.blue3,
                focusBackgroundColor: colors.blue3,
                focusBorderColor: colors.blue3,
                activeBackgroundColor: colors.blue3,
                activeBorderColor: colors.blue3,
            },

            info: {
                color: colors.white,
                backgroundColor: colors.turquoise2,
                borderColor: colors.turquoise2,
                hoverBackgroundColor: colors.turquoise3,
                hoverBorderColor: colors.turquoise3,
                focusBackgroundColor: colors.turquoise3,
                focusBorderColor: colors.turquoise3,
                activeBackgroundColor: colors.turquoise3,
                activeBorderColor: colors.turquoise3,
            },

            success: {
                color: colors.white,
                backgroundColor: colors.green2,
                borderColor: colors.green2,
                hoverBackgroundColor: colors.green3,
                hoverBorderColor: colors.green3,
                focusBackgroundColor: colors.green3,
                focusBorderColor: colors.green3,
                activeBackgroundColor: colors.green3,
                activeBorderColor: colors.green3,
            },

            warning: {
                color: colors.white,
                backgroundColor: colors.orange2,
                borderColor: colors.orange2,
                hoverBackgroundColor: colors.orange3,
                hoverBorderColor: colors.orange3,
                focusBackgroundColor: colors.orange3,
                focusBorderColor: colors.orange3,
                activeBackgroundColor: colors.orange3,
                activeBorderColor: colors.orange3,
            },

            danger: {
                color: colors.white,
                backgroundColor: colors.red2,
                borderColor: colors.red2,
                hoverBackgroundColor: colors.red3,
                hoverBorderColor: colors.red3,
                focusBackgroundColor: colors.red3,
                focusBorderColor: colors.red3,
                activeBackgroundColor: colors.red3,
                activeBorderColor: colors.red3,
            },

            link: {
                color: colors.blue2,
                backgroundColor: 'transparent',
                borderColor: 'transparent',
                hoverBackgroundColor: 'transparent',
                hoverBorderColor: 'transparent',
                focusBackgroundColor: 'transparent',
                focusBorderColor: 'transparent',
                activeBackgroundColor: 'transparent',
                activeBorderColor: 'transparent',
            },
        },
        input: {
            borderWidth: '2px',
            borderRadius: 0,
            boxShadow: 'inset 0 1px 1px rgba(0, 0, 0, 0.075)',
            opacity: 0.8,
            backgroundColor: colors.white,
            borderColor: colors.gray3,

            focusOpacity: 1,
            focusBackgroundColor: colors.white,
            focusBorderColor: colors.blue2,
            focusBoxShadow: 'inset 0 1px 1px rgba(0, 0, 0, 0.075)',

            successBackgroundColor: colors.white,
            successBorderColor: colors.green2,

            warningBackgroundColor: colors.white,
            warningBorderColor: colors.orange2,

            errorBackgroundColor: colors.white,
            errorBorderColor: colors.red2,
        },
        hint: {
            fontSize: '0.9em',
            margin: 0,
            padding: '5px 10px',

            backgroundColor: colors.gray5,
            color: colors.anthracite2,

            successBackgroundColor: colors.green2,
            successColor: colors.white,

            warningBackgroundColor: colors.orange2,
            warningColor: colors.white,

            errorBackgroundColor: colors.red2,
            errorColor: colors.white,
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
    children: PropTypes.node.isRequired,
};


export default DefaultTheme;
