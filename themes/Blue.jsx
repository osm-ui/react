
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
    backgroundColor: colors.blue2,
    borderColor: colors.blue1,
    dimmerBackgroundColor: colors.blue2,
    loaderColor: colors.white,
    controlColor: colors.blue1,
    hoverControlColor: colors.white,

    form: {
        button: {
            color: colors.white,
            backgroundColor: colors.blue2,
            borderColor: colors.blue5,
            hoverBackgroundColor: colors.blue3,
            hoverBorderColor: colors.blue5,
            focusBackgroundColor: colors.blue3,
            focusBorderColor: colors.blue5,
            activeBackgroundColor: colors.blue3,
            activeBorderColor: colors.blue5,

            primary: {
                color: colors.blue2,
                backgroundColor: colors.white,
                borderColor: colors.white,
                hoverBackgroundColor: colors.gray5,
                hoverBorderColor: colors.gray5,
                focusBackgroundColor: colors.gray5,
                focusBorderColor: colors.gray5,
                activeBackgroundColor: colors.gray5,
                activeBorderColor: colors.gray5,
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
