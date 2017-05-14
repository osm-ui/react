
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
    buildLightThemeConfig(defaultThemeConfig, colors, 'yellow'),
    {},
);


const YellowTheme = ({ children, ...rest }) => (
    <ThemeProvider theme={config}>
        <StyledDiv {...rest}>
            {children}
        </StyledDiv>
    </ThemeProvider>
);


YellowTheme.propTypes = {
    children: PropTypes.node.isRequired,
};

YellowTheme.displayName = 'YellowTheme';

export default YellowTheme;
