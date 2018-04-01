import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import _ from 'lodash';
import { colors } from 'constants/index';
import { buildLightThemeConfig } from 'helpers/themes';
import { config as defaultThemeConfig, StyledSpan } from './Default';

export const config = _.merge(
  {},
  buildLightThemeConfig(defaultThemeConfig, colors, 'sky'),
  {}
);

const SkyTheme = ({ children, ...rest }) => (
  <ThemeProvider theme={config}>
    <StyledSpan>
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, rest);
        }

        return child;
      })}
    </StyledSpan>
  </ThemeProvider>
);

SkyTheme.propTypes = {
  children: PropTypes.node.isRequired
};

SkyTheme.displayName = 'SkyTheme';

export default SkyTheme;
