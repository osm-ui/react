import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { lighten, darken } from 'polished';
import _ from 'lodash';
import colors from '../colors';
import { buildLightThemeConfig } from '../helpers/themes';
import { config as defaultThemeConfig, StyledSpan } from './Default';

export const config = _.merge(
  {},
  buildLightThemeConfig(defaultThemeConfig, colors, 'lightGray'),
  {
    column: {
      nav: {
        color: darken(0.27, colors.lightGray1),
        backgroundColor: lighten(0.05, colors.lightGray3),
        hoverColor: darken(0.27, colors.lightGray1),
        hoverBackgroundColor: lighten(0.05, colors.lightGray4)
      }
    }
  }
);

const LightGrayTheme = ({ children, ...rest }) => (
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

LightGrayTheme.propTypes = {
  children: PropTypes.node.isRequired
};

LightGrayTheme.displayName = 'LightGrayTheme';

export default LightGrayTheme;
