
import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import _ from 'lodash';
import colors from '../colors';
import { buildLightThemeConfig } from '../helpers/themes';
import {
    config as defaultThemeConfig,
    StyledDiv,
} from './Default';


export const config = _.merge(
    {},
    buildLightThemeConfig(defaultThemeConfig, colors, 'lightGray'),
    {},
);


const LightGrayTheme = ({ children, ...rest }) => (
    <ThemeProvider theme={config}>
        <StyledDiv {...rest}>
            {children}
        </StyledDiv>
    </ThemeProvider>
);


LightGrayTheme.propTypes = {
    children: PropTypes.node.isRequired,
};

LightGrayTheme.displayName = 'LightGrayTheme';

export default LightGrayTheme;
