import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';
import { makeTransparent } from '../helpers/themes';
import colors from '../colors';

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
      fontSize: '1.1em',
      lineHeight: '1.2em',
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
    margin: '10px',
    childrenMargin: '8px',
    xsSize: '30px',
    smSize: '40px',
    mdSize: '50px',
    lgSize: '60px',

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
    xsHeight: '30px',
    smHeight: '35px',
    mdHeight: '40px',
    lgHeight: '45px',
    xsFontSize: '0.9em',
    smFontSize: '1em',
    mdFontSize: '1.1em',
    lgFontSize: '1.3em',
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
        color: colors.white,
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
        color: colors.white,
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
      fontSize: '1.1em',
      fontWeight: 400,

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
    hint: {
      fontSize: '0.9em',
      margin: 0,
      padding: '5px 10px',

      backgroundColor: colors.lightGray5,
      color: colors.anthracite2,

      success: {
        color: colors.white,
        backgroundColor: colors.green2
      },

      warning: {
        color: colors.white,
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
