
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

            primaryBackgroundColor: colors.blue2,
            primaryBorderColor: colors.blue2,

            infoBackgroundColor: colors.turquoise2,
            infoBorderColor: colors.turquoise2,

            successBackgroundColor: colors.green2,
            successBorderColor: colors.green2,

            warningBackgroundColor: colors.orange2,
            warningBorderColor: colors.orange2,

            dangerBackgroundColor: colors.red2,
            dangerBorderColor: colors.red2,
        },
        input: {
            borderWidth: '2px',
            borderRadius: 0,
            boxShadow: 'inset 0 1px 1px rgba(0, 0, 0, 0.075)',
            opacity: 0.8,
            backgroundColor: colors.white,
            borderColor: colors.gray3,

            focusedOpacity: 1,
            focusedBackgroundColor: colors.white,
            focusedBorderColor: colors.blue2,
            focusedBoxShadow: 'inset 0 1px 1px rgba(0, 0, 0, 0.075)',

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
