import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import _ from 'lodash';
import { colors } from 'constants/index';
import { buildDarkThemeConfig } from 'helpers/themes';
import { config as defaultThemeConfig, StyledSpan } from './Default';

export const config = _.merge(
  {},
  buildDarkThemeConfig(defaultThemeConfig, colors, 'brown'),
  {}
);

const BrownTheme = ({ children, ...rest }) => (
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

BrownTheme.propTypes = {
  children: PropTypes.node.isRequired
};

BrownTheme.displayName = 'BrownTheme';

export default BrownTheme;
