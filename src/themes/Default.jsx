import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';
import { darken } from 'polished';
import { makeTransparent } from 'helpers/themes';
import { colors } from 'constants/index';

const boxShadow =
  '0 3px 4px -3px rgba(0, 0, 0, 0.5), 0 0 2px -1px rgba(0, 0, 0, 0.4)';

export const config = {
  boxShadow,
  font:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  color: colors.anthracite1,
  backgroundColor: colors.white,
  borderColor: colors.lightGray4,
  loaderColor: colors.lightGray1,
  borderStyle: 'solid',
  borderWidth: '4px',
  borderRadius: 0,
  controlColor: colors.lightGray4,
  hoverControlColor: colors.lightGray1,

  map: {
    controlColor: colors.anthracite1,
    controlBackgroundColor: colors.white,
    hoverControlColor: colors.white,
    hoverControlBackgroundColor: colors.blue2
  },
  sidebar: {
    boxShadow,
    nav: {
      fontSize: '1.8rem',
      lineHeight: '2rem',
      fontWeight: 500,
      borderRadius: '4px',
      color: colors.anthracite1,
      backgroundColor: colors.lightGray5,
      hoverColor: colors.anthracite1,
      hoverBackgroundColor: colors.lightGray4
    }
  },
  toolbar: {
    boxShadow,
    margin: '1rem',
    childrenMargin: '.8rem',
    xsSize: '2.4rem',
    smSize: '3rem',
    mdSize: '4rem',
    lgSize: '5rem',
    xsFontSize: '1rem',
    smFontSize: '1.2rem',
    mdFontSize: '1.4rem',
    lgFontSize: '1.8rem',
    xsIconSize: '1.2rem',
    smIconSize: '1.4rem',
    mdIconSize: '1.6rem',
    lgIconSize: '2rem',
    xsLineHeight: '1rem',
    smLineHeight: '1.2rem',
    mdLineHeight: '1.6rem',
    lgLineHeight: '1.7rem',

    button: {
      color: colors.anthracite1,
      backgroundColor: colors.white,
      borderColor: colors.lightGray3,
      borderStyle: 'solid',
      borderWidth: '2px',
      borderRadius: '4px',
      hoverBackgroundColor: colors.lightGray5,
      hoverBorderColor: colors.lightGray3,
      focusBackgroundColor: colors.lightGray5,
      focusBorderColor: colors.lightGray3,
      activeBackgroundColor: colors.lightGray5,
      activeBorderColor: colors.lightGray3
    }
  },
  titlebar: {
    boxShadow,
    xsHeight: '3rem',
    smHeight: '3.5rem',
    mdHeight: '4rem',
    lgHeight: '4.5rem',
    xsFontSize: '1.4rem',
    smFontSize: '1.6rem',
    mdFontSize: '1.8rem',
    lgFontSize: '1.9rem',
    fontWeight: 500,
    color: colors.anthracite1,
    backgroundColor: colors.white,
    borderColor: colors.lightGray4,
    borderStyle: 'solid',
    borderWidth: '1px',

    button: {
      color: colors.anthracite1,
      backgroundColor: colors.white,
      borderColor: colors.white,
      borderStyle: 'solid',
      borderWidth: 0,
      borderRadius: '4px',
      hoverBackgroundColor: colors.lightGray5,
      hoverBorderColor: colors.lightGray5,
      focusBackgroundColor: colors.lightGray5,
      focusBorderColor: colors.lightGray5,
      activeBackgroundColor: colors.lightGray5,
      activeBorderColor: colors.lightGray5
    }
  },
  form: {
    select: {
      optionColor: colors.white,
      optionBackgroundColor: colors.blue2
    },
    button: {
      fontWeight: 500,
      color: colors.anthracite2,
      backgroundColor: colors.white,
      borderColor: colors.lightGray3,
      borderStyle: 'solid',
      borderWidth: '2px',
      borderRadius: '4px',
      hoverBackgroundColor: colors.lightGray5,
      hoverBorderColor: colors.lightGray3,
      focusBackgroundColor: colors.lightGray5,
      focusBorderColor: colors.lightGray3,
      activeBackgroundColor: colors.lightGray5,
      activeBorderColor: colors.lightGray3,

      primary: {
        fontWeight: 500,
        color: colors.white,
        backgroundColor: colors.blue2,
        borderColor: colors.blue1,
        hoverBackgroundColor: colors.blue3,
        hoverBorderColor: colors.blue2,
        focusBackgroundColor: colors.blue3,
        focusBorderColor: colors.blue2,
        activeBackgroundColor: colors.blue3,
        activeBorderColor: colors.blue2
      },

      info: {
        fontWeight: 500,
        color: darken(0.27, colors.turquoise1),
        backgroundColor: colors.turquoise2,
        borderColor: colors.turquoise1,
        hoverBackgroundColor: colors.turquoise3,
        hoverBorderColor: colors.turquoise2,
        focusBackgroundColor: colors.turquoise3,
        focusBorderColor: colors.turquoise2,
        activeBackgroundColor: colors.turquoise3,
        activeBorderColor: colors.turquoise2
      },

      success: {
        fontWeight: 500,
        color: colors.white,
        backgroundColor: colors.green2,
        borderColor: colors.green1,
        hoverBackgroundColor: colors.green3,
        hoverBorderColor: colors.green2,
        focusBackgroundColor: colors.green3,
        focusBorderColor: colors.green2,
        activeBackgroundColor: colors.green3,
        activeBorderColor: colors.green2
      },

      warning: {
        fontWeight: 500,
        color: darken(0.27, colors.orange1),
        backgroundColor: colors.orange2,
        borderColor: colors.orange1,
        hoverBackgroundColor: colors.orange3,
        hoverBorderColor: colors.orange2,
        focusBackgroundColor: colors.orange3,
        focusBorderColor: colors.orange2,
        activeBackgroundColor: colors.orange3,
        activeBorderColor: colors.orange2
      },

      danger: {
        fontWeight: 500,
        color: colors.white,
        backgroundColor: colors.red2,
        borderColor: colors.red1,
        hoverBackgroundColor: colors.red3,
        hoverBorderColor: colors.red2,
        focusBackgroundColor: colors.red3,
        focusBorderColor: colors.red2,
        activeBackgroundColor: colors.red3,
        activeBorderColor: colors.red2
      },

      link: {
        fontWeight: 400,
        color: colors.blue2,
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        hoverBackgroundColor: 'transparent',
        hoverBorderColor: 'transparent',
        focusBackgroundColor: 'transparent',
        focusBorderColor: 'transparent',
        activeBackgroundColor: 'transparent',
        activeBorderColor: 'transparent'
      }
    },
    input: {
      borderWidth: '2px',
      borderRadius: 0,
      boxShadow: 'inset 0 1px 1px rgba(0, 0, 0, 0.075)',
      opacity: 0.8,
      backgroundColor: colors.white,
      borderColor: colors.lightGray3,

      focusOpacity: 1,
      focusBackgroundColor: colors.white,
      focusBorderColor: colors.blue2,
      focusBoxShadow: 'inset 0 1px 1px rgba(0, 0, 0, 0.075)',

      info: {
        color: colors.turquoise2,
        backgroundColor: colors.white,
        borderColor: colors.turquoise2
      },

      success: {
        color: colors.green2,
        backgroundColor: colors.white,
        borderColor: colors.green2
      },

      warning: {
        color: colors.orange2,
        backgroundColor: colors.white,
        borderColor: colors.orange2
      },

      error: {
        color: colors.red1,
        backgroundColor: colors.white,
        borderColor: colors.red2
      }
    },
    label: {
      color: colors.anthracite1,
      borderColor: colors.anthracite1,
      backgroundColor: colors.white,
      fontSize: '1.7rem',
      fontWeight: 400,

      info: {
        color: colors.turquoise1
      },

      success: {
        color: colors.green1
      },

      warning: {
        color: colors.orange1
      },

      error: {
        color: colors.red1
      }
    },
    checkbox: {
      borderColor: colors.darkGray3
    },
    hint: {
      fontSize: '1.4rem',
      margin: 0,
      padding: '.5rem 1rem',

      backgroundColor: colors.lightGray5,
      color: colors.anthracite2,

      info: {
        color: darken(0.27, colors.turquoise1),
        backgroundColor: colors.turquoise2
      },

      success: {
        color: colors.white,
        backgroundColor: colors.green2
      },

      warning: {
        color: darken(0.27, colors.orange1),
        backgroundColor: colors.orange2
      },

      error: {
        color: colors.white,
        backgroundColor: colors.red2
      }
    }
  },
  alert: {
    info: {
      color: colors.turquoise1,
      backgroundColor: colors.turquoise5,
      borderColor: colors.turquoise5
    },

    success: {
      color: colors.green1,
      backgroundColor: colors.green5,
      borderColor: colors.green5
    },

    warning: {
      color: colors.orange1,
      backgroundColor: colors.orange5,
      borderColor: colors.orange5
    },

    danger: {
      color: colors.red1,
      backgroundColor: colors.red5,
      borderColor: colors.red5
    }
  },
  modal: {
    color: colors.anthracite1,
    backgroundColor: makeTransparent(colors.white, 0.95)
  }
};

/* eslint-disable no-unused-expressions */
injectGlobal`
    .osm-ui-react-marker-default {
        color: ${colors.anthracite1};

        #colorized, #colorized * {
            fill: ${colors.white} !important;
        }
    }
`;
/* eslint-enable */

export const StyledSpan = styled.span`
  font-family: ${props => props.theme.font};
`;

const DefaultTheme = ({ children, ...rest }) => (
  <ThemeProvider theme={config} {...rest}>
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

DefaultTheme.propTypes = {
  children: PropTypes.node.isRequired
};

DefaultTheme.displayName = 'DefaultTheme';

export default DefaultTheme;
