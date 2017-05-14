
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
    buildDarkThemeConfig(defaultThemeConfig, colors, 'turquoise'),
    {
        form: {
            button: {
                info: {
                    color: colors.white,
                    backgroundColor: colors.turquoise1,
                    borderColor: colors.turquoise1,
                    hoverBackgroundColor: colors.turquoise3,
                    hoverBorderColor: colors.turquoise3,
                    focusBackgroundColor: colors.turquoise3,
                    focusBorderColor: colors.turquoise3,
                    activeBackgroundColor: colors.turquoise3,
                    activeBorderColor: colors.turquoise3,
                },
            },
        },
    },
);


const TurquoiseTheme = ({ children, ...rest }) => (
    <ThemeProvider theme={config}>
        <StyledDiv {...rest}>
            {children}
        </StyledDiv>
    </ThemeProvider>
);


TurquoiseTheme.propTypes = {
    children: PropTypes.node.isRequired,
};

TurquoiseTheme.displayName = 'TurquoiseTheme';

export default TurquoiseTheme;
