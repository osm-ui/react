
import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import colors from '../colors';


export const config = {
    font: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
    color: colors.anthracite1,
    backgroundColor: colors.white,
    borderColor: colors.lightGray4,
    boxShadow: '0 3px 4px -3px rgba(0, 0, 0, 0.5), 0 0 2px -1px rgba(0, 0, 0, 0.4)',
    loaderColor: colors.lightGray1,
    borderStyle: 'solid',
    borderWidth: '4px',
    borderRadius: 0,
    controlColor: colors.lightGray4,
    hoverControlColor: colors.lightGray1,

    map: {
        controlColor: colors.anthracite1,
        controlBackgroundColor: colors.white,
        hoverControlColor: colors.white,
        hoverControlBackgroundColor: colors.blue2,
    },
    toolbar: {
        margin: '10px',
        childrenMargin: '8px',
        xsSize: '30px',
        smSize: '40px',
        mdSize: '50px',
        lgSize: '60px',

        button: {
            color: colors.anthracite1,
            backgroundColor: colors.white,
            borderColor: colors.lightGray3,
            borderStyle: 'solid',
            borderWidth: '1px',
            hoverBackgroundColor: colors.lightGray5,
            hoverBorderColor: colors.lightGray3,
            focusBackgroundColor: colors.lightGray5,
            focusBorderColor: colors.lightGray3,
            activeBackgroundColor: colors.lightGray5,
            activeBorderColor: colors.lightGray3,
        },
    },
    titlebar: {
        xsHeight: '30px',
        smHeight: '35px',
        mdHeight: '45px',
        lgHeight: '55px',
        xsFontSize: '0.8em',
        smFontSize: '0.9em',
        mdFontSize: '1.1em',
        lgFontSize: '1.3em',
        fontWeight: 700,
        color: colors.anthracite1,
        backgroundColor: colors.white,
        borderColor: colors.lightGray4,
        borderStyle: 'solid',
        borderWidth: '1px',

        button: {
            color: colors.anthracite1,
            backgroundColor: colors.white,
            borderColor: colors.white,
            borderStyle: 'solid',
            borderWidth: 0,
            hoverBackgroundColor: colors.lightGray5,
            hoverBorderColor: colors.lightGray5,
            focusBackgroundColor: colors.lightGray5,
            focusBorderColor: colors.lightGray5,
            activeBackgroundColor: colors.lightGray5,
            activeBorderColor: colors.lightGray5,
        },
    },
    form: {
        select: {
            optionColor: colors.white,
            optionBackgroundColor: colors.blue2,
        },
        button: {
            fontWeight: 700,
            color: colors.anthracite2,
            backgroundColor: colors.white,
            borderColor: colors.lightGray3,
            hoverBackgroundColor: colors.lightGray5,
            hoverBorderColor: colors.lightGray3,
            focusBackgroundColor: colors.lightGray5,
            focusBorderColor: colors.lightGray3,
            activeBackgroundColor: colors.lightGray5,
            activeBorderColor: colors.lightGray3,

            primary: {
                fontWeight: 700,
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
                fontWeight: 700,
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
                fontWeight: 700,
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
                fontWeight: 700,
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
                fontWeight: 700,
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
                fontWeight: 400,
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
            borderColor: colors.lightGray3,

            focusOpacity: 1,
            focusBackgroundColor: colors.white,
            focusBorderColor: colors.blue2,
            focusBoxShadow: 'inset 0 1px 1px rgba(0, 0, 0, 0.075)',

            success: {
                color: colors.green2,
                backgroundColor: colors.white,
                borderColor: colors.green2,
            },

            warning: {
                color: colors.orange2,
                backgroundColor: colors.white,
                borderColor: colors.orange2,
            },

            error: {
                color: colors.red1,
                backgroundColor: colors.white,
                borderColor: colors.red2,
            },
        },
        label: {
            color: colors.anthracite1,
            fontSize: '1.1em',
            fontWeight: 400,

            success: {
                color: colors.green1,
            },

            warning: {
                color: colors.orange1,
            },

            error: {
                color: colors.red1,
            },
        },
        hint: {
            fontSize: '0.9em',
            margin: 0,
            padding: '5px 10px',

            backgroundColor: colors.lightGray5,
            color: colors.anthracite2,

            success: {
                color: colors.white,
                backgroundColor: colors.green2,
            },

            warning: {
                color: colors.white,
                backgroundColor: colors.orange2,
            },

            error: {
                color: colors.white,
                backgroundColor: colors.red2,
            },
        },
    },
    alert: {
        info: {
            color: colors.turquoise1,
            backgroundColor: colors.turquoise5,
            borderColor: colors.turquoise5,
        },

        success: {
            color: colors.green1,
            backgroundColor: colors.green5,
            borderColor: colors.green5,
        },

        warning: {
            color: colors.orange1,
            backgroundColor: colors.orange5,
            borderColor: colors.orange5,
        },

        danger: {
            color: colors.red1,
            backgroundColor: colors.red5,
            borderColor: colors.red5,
        },
    },
};


export const StyledDiv = styled.div`
    font-family: ${props => props.theme.font};
`;

const DefaultTheme = ({ children, ...rest }) => (
    <ThemeProvider theme={config} {...rest}>
        <StyledDiv>
            {children}
        </StyledDiv>
    </ThemeProvider>
);


DefaultTheme.propTypes = {
    children: PropTypes.node.isRequired,
};

DefaultTheme.displayName = 'DefaultTheme';

export default DefaultTheme;
