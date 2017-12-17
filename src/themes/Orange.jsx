import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import _ from 'lodash';
import colors from 'themes/colors';
import { buildDarkThemeConfig } from 'helpers/themes';
import { config as defaultThemeConfig, StyledSpan } from './Default';

export const config = _.merge(
  {},
  buildDarkThemeConfig(defaultThemeConfig, colors, 'orange'),
  {
    form: {
      button: {
        warning: {
          color: colors.white,
          backgroundColor: colors.orange1,
          borderColor: colors.orange1,
          hoverBackgroundColor: colors.orange3,
          hoverBorderColor: colors.orange3,
          focusBackgroundColor: colors.orange3,
          focusBorderColor: colors.orange3,
          activeBackgroundColor: colors.orange3,
          activeBorderColor: colors.orange3
        }
      }
    }
  }
);

const OrangeTheme = ({ children, ...rest }) => (
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

OrangeTheme.propTypes = {
  children: PropTypes.node.isRequired
};

OrangeTheme.displayName = 'OrangeTheme';

export default OrangeTheme;
