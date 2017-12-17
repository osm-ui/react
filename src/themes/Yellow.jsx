import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import _ from 'lodash';
import colors from 'themes/colors';
import { buildLightThemeConfig } from 'helpers/themes';
import { config as defaultThemeConfig, StyledSpan } from './Default';

export const config = _.merge(
  {},
  buildLightThemeConfig(defaultThemeConfig, colors, 'yellow'),
  {}
);

const YellowTheme = ({ children, ...rest }) => (
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

YellowTheme.propTypes = {
  children: PropTypes.node.isRequired
};

YellowTheme.displayName = 'YellowTheme';

export default YellowTheme;
