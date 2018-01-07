import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import _ from 'lodash';
import { colors } from 'constants/index';
import { buildDarkThemeConfig } from 'helpers/themes';
import { config as defaultThemeConfig, StyledSpan } from './Default';

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
          activeBorderColor: colors.green1
        }
      }
    }
  }
);

const GreenTheme = ({ children, ...rest }) => (
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

GreenTheme.propTypes = {
  children: PropTypes.node.isRequired
};

GreenTheme.displayName = 'GreenTheme';

export default GreenTheme;
