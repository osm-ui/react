
import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import _ from 'lodash';
import colors from '../colors';
import { buildDarkThemeConfig } from '../helpers/themes';
import {
    config as defaultThemeConfig,
    StyledDiv,
} from './Default';


export const config = _.merge(
    {},
    buildDarkThemeConfig(defaultThemeConfig, colors, 'green'),
    {
        form: {
            button: {
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
    },
);


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
