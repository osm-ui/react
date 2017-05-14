
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
    buildDarkThemeConfig(defaultThemeConfig, colors, 'rose'),
    {},
);


const RoseTheme = ({ children, ...rest }) => (
    <ThemeProvider theme={config}>
        <StyledDiv {...rest}>
            {children}
        </StyledDiv>
    </ThemeProvider>
);


RoseTheme.propTypes = {
    children: PropTypes.node.isRequired,
};

RoseTheme.displayName = 'RoseTheme';

export default RoseTheme;
