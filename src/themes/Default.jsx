import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';
import { darken } from 'polished';
import { makeTransparent } from 'helpers/themes';
import { colors } from 'constants/index';

const boxShadow =
  '0 3px 4px -3px rgba(0, 0, 0, 0.5), 0 0 2px -1px rgba(0, 0, 0, 0.4)';

export const config = {
  rem: 16,
  boxShadow,
  font:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  color: colors.anthracite1,
  backgroundColor: colors.white,
  borderColor: colors.lightGray4,
  loaderColor: colors.lightGray1,
  borderStyle: 'solid',
  borderWidth: '4px',
  borderRadius: '2px',
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
    fontSize: '1rem',
    lineHeight: '1.5rem',
    nav: {
      fontSize: '1.3rem',
      lineHeight: '1.5rem',
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
      backgroundColor: colors.lightGray5,
      borderRadius: '4px',
      hoverBackgroundColor: colors.lightGray4,
      focusBackgroundColor: colors.lightGray4,
      activeBackgroundColor: colors.lightGray4
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
      backgroundColor: colors.lightGray5,
      borderRadius: '4px',
      hoverBackgroundColor: colors.lightGray4,
      focusBackgroundColor: colors.lightGray4,
      activeBackgroundColor: colors.lightGray4
    }
  },
  form: {
    select: {
      optionColor: colors.anthracite1,
      optionBackgroundColor: colors.xhite,
      focusedOptionColor: colors.white,
      focusedOptionBackgroundColor: colors.blue2
    },
    button: {
      fontWeight: 500,
      color: colors.anthracite2,
      borderRadius: '4px',
      backgroundColor: colors.lightGray5,
      hoverBackgroundColor: colors.lightGray4,
      focusBackgroundColor: colors.lightGray4,
      activeBackgroundColor: colors.lightGray3,
      outlineColor: colors.lightGray3,

      primary: {
        fontWeight: 500,
        color: colors.white,
        backgroundColor: colors.blue2,
        hoverBackgroundColor: colors.blue3,
        focusBackgroundColor: colors.blue3,
        activeBackgroundColor: colors.blue2,
        outlineColor: colors.blue2
      },

      info: {
        fontWeight: 500,
        color: darken(0.27, colors.turquoise1),
        backgroundColor: colors.turquoise2,
        hoverBackgroundColor: colors.turquoise3,
        focusBackgroundColor: colors.turquoise3,
        activeBackgroundColor: colors.turquoise2,
        outlineColor: colors.turquoise2
      },

      success: {
        fontWeight: 500,
        color: colors.white,
        backgroundColor: colors.green2,
        hoverBackgroundColor: colors.green3,
        focusBackgroundColor: colors.green3,
        activeBackgroundColor: colors.green2,
        outlineColor: colors.green2
      },

      warning: {
        fontWeight: 500,
        color: darken(0.27, colors.orange1),
        backgroundColor: colors.orange2,
        hoverBackgroundColor: colors.orange3,
        focusBackgroundColor: colors.orange3,
        activeBackgroundColor: colors.orange2,
        outlineColor: colors.orange2
      },

      danger: {
        fontWeight: 500,
        color: colors.white,
        backgroundColor: colors.red2,
        hoverBackgroundColor: colors.red3,
        focusBackgroundColor: colors.red3,
        activeBackgroundColor: colors.red2,
        outlineColor: colors.red2
      },

      link: {
        fontWeight: 400,
        color: colors.blue2,
        backgroundColor: 'transparent',
        hoverBackgroundColor: 'transparent',
        focusBackgroundColor: 'transparent',
        activeBackgroundColor: 'transparent',
        outlineColor: colors.blue2
      }
    },
    input: {
      fontSize: '.9rem',
      lineHeight: '1.2rem',
      borderWidth: '1px',
      borderRadius: '2px',
      boxShadow: 'inset 0 1px 1px rgba(0, 0, 0, 0.075)',
      opacity: 1,
      backgroundColor: colors.white,
      borderColor: colors.lightGray3,
      disabledOpacity: 0.6,

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
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: '1.6rem',

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
      borderColor: colors.darkGray3,
      color: colors.darkGray2,
      disabledOpacity: 0.6,

      sm: {
        lineHeight: '1.6rem',
        size: '.8rem',
        top: '.4rem',
        innerSize: '.7rem',
        innerTop: '-.1rem',
        paddingLeft: '1.5rem'
      },
      md: {
        lineHeight: '2rem',
        size: '1rem',
        top: '.5rem',
        innerSize: '.9rem',
        innerTop: '-.1rem',
        paddingLeft: '1.8rem'
      },
      lg: {
        lineHeight: '2.6rem',
        size: '1.2rem',
        top: '.7rem',
        innerSize: '1rem',
        innerTop: '0rem',
        paddingLeft: '2.1rem'
      }
    },
    radio: {
      borderColor: colors.darkGray3,
      backgroundColor: colors.darkGray2,
      disabledOpacity: 0.6,

      sm: {
        lineHeight: '1.6rem',
        size: '.9rem',
        top: '.3rem',
        innerSize: '.5rem',
        innerTop: '.5rem',
        innerLeft: '.2rem',
        paddingLeft: '1.5rem'
      },
      md: {
        lineHeight: '2rem',
        size: '1rem',
        top: '.4rem',
        innerSize: '.5rem',
        innerTop: '.65rem',
        innerLeft: '.25rem',
        paddingLeft: '1.8rem'
      },
      lg: {
        lineHeight: '2.6rem',
        size: '1.2rem',
        top: '.6rem',
        innerSize: '.7rem',
        innerTop: '.85rem',
        innerLeft: '.25rem',
        paddingLeft: '2.1rem'
      }
    },
    hint: {
      fontSize: '.8rem',
      margin: 0,
      padding: '.4rem .8rem',
      disabledOpacity: 0.6,
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
    borderRadius: '2px',
    horizontalPadding: '1.5rem',
    verticalPadding: '1.2rem',

    info: {
      color: darken(0.18, colors.turquoise1),
      backgroundColor: colors.turquoise5
    },

    success: {
      color: darken(0.18, colors.green1),
      backgroundColor: colors.green5
    },

    warning: {
      color: darken(0.18, colors.orange1),
      backgroundColor: colors.orange5
    },

    danger: {
      color: darken(0.18, colors.red1),
      backgroundColor: colors.red5
    }
  },
  modal: {
    color: colors.anthracite1,
    overlayBackgroundColor: makeTransparent(colors.black, 0.65),
    overlayPadding: '4rem',
    backgroundColor: colors.white,
    padding: '5rem 3rem'
  },
  notification: {
    fontSize: '1.4rem',
    offset: '1rem',

    info: {
      color: darken(0.18, colors.turquoise1),
      backgroundColor: colors.turquoise5,
      borderColor: colors.turquoise2,
      controlColor: colors.turquoise2,
      hoverControlColor: colors.turquoise3
    },

    success: {
      color: darken(0.18, colors.green1),
      backgroundColor: colors.green5,
      borderColor: colors.green2,
      controlColor: colors.green2,
      hoverControlColor: colors.green3
    },

    warning: {
      color: darken(0.18, colors.orange1),
      backgroundColor: colors.orange5,
      borderColor: colors.orange2,
      controlColor: colors.orange2,
      hoverControlColor: colors.orange3
    },

    danger: {
      color: darken(0.18, colors.red1),
      backgroundColor: colors.red5,
      borderColor: colors.red2,
      controlColor: colors.red2,
      hoverControlColor: colors.red3
    }
  },
  list: {
    fontSize: '.9rem',
    color: colors.anthracite2,
    backgroundColor: colors.white,
    borderColor: colors.lightGray3
  }
};

/* eslint-disable no-unused-expressions */
injectGlobal`
    *, *:before, *:after {
      box-sizing: border-box;
    }

    html, body {
    font-size: ${config.rem}px;
      color: ${config.color};
    }

    .osm-ui-react-marker-default {
        color: ${config.color};

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
