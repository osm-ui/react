import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import _ from 'lodash';
import colors from 'themes/colors';
import { buildDarkThemeConfig } from 'helpers/themes';
import { config as defaultThemeConfig, StyledSpan } from './Default';

export const config = _.merge(
  {},
  buildDarkThemeConfig(defaultThemeConfig, colors, 'purple'),
  {}
);

const PurpleTheme = ({ children, ...rest }) => (
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

PurpleTheme.propTypes = {
  children: PropTypes.node.isRequired
};

PurpleTheme.displayName = 'PurpleTheme';

export default PurpleTheme;
