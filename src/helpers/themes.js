import _ from 'lodash';
import hexRgb from 'hex-rgb';
import { lighten, darken } from 'polished';
import { injectGlobal } from 'styled-components';

export function makeTransparent(hexColor, opacity) {
  const colorAsAnArray = hexRgb(hexColor);
  colorAsAnArray.push(opacity);
  return `rgba(${colorAsAnArray.join(',')})`;
}

export function buildDarkThemeConfig(baseConfig, colors, colorVariant) {
  const color1 = colors[`${colorVariant}1`];
  const color2 = colors[`${colorVariant}2`];
  const color3 = colors[`${colorVariant}3`];
  // const color4 = colors[`${colorVariant}4`];
  const color5 = colors[`${colorVariant}5`];

  /* eslint-disable no-unused-expressions */
  injectGlobal`
    .osm-ui-react-marker-${colorVariant} {
      color: ${colors.white};

      #colorized, #colorized * {
        fill: ${color2} !important;
      }
    }
  `;
  /* eslint-enable */

  return _.merge({}, baseConfig, {
    color: colors.white,
    backgroundColor: color2,
    borderColor: color1,
    loaderColor: colors.white,
    controlColor: color1,
    hoverControlColor: colors.white,

    sidebar: {
      nav: {
        color: colors.white,
        backgroundColor: lighten(0.1, color2),
        hoverColor: colors.white,
        hoverBackgroundColor: color3
      }
    },
    toolbar: {
      button: {
        color: colors.white,
        backgroundColor: color2,
        borderColor: color1,
        hoverBackgroundColor: color3,
        hoverBorderColor: color2,
        focusBackgroundColor: color3,
        focusBorderColor: color2,
        activeBackgroundColor: color3,
        activeBorderColor: color2
      }
    },
    titlebar: {
      color: colors.white,
      backgroundColor: color2,
      borderColor: color2,

      button: {
        color: colors.white,
        backgroundColor: color2,
        borderColor: color2,
        hoverBackgroundColor: color3,
        hoverBorderColor: color3,
        focusBackgroundColor: color3,
        focusBorderColor: color3,
        activeBackgroundColor: color3,
        activeBorderColor: color3
      }
    },
    form: {
      button: {
        color: colors.white,
        backgroundColor: color2,
        borderColor: color5,
        hoverBackgroundColor: color3,
        hoverBorderColor: color5,
        focusBackgroundColor: color3,
        focusBorderColor: color5,
        activeBackgroundColor: color3,
        activeBorderColor: color5,

        primary: {
          color: color1,
          backgroundColor: colors.white,
          borderColor: color1,
          hoverBackgroundColor: colors.lightGray5,
          hoverBorderColor: color1,
          focusBackgroundColor: colors.lightGray5,
          focusBorderColor: color1,
          activeBackgroundColor: colors.lightGray5,
          activeBorderColor: color1
        }
      }
    },
    modal: {
      color: colors.white,
      backgroundColor: makeTransparent(color2, 0.95)
    }
  });
}

export function buildLightThemeConfig(baseConfig, colors, colorVariant) {
  const color1 = colors[`${colorVariant}1`];
  const color2 = colors[`${colorVariant}2`];
  const color3 = colors[`${colorVariant}3`];
  const color4 = colors[`${colorVariant}4`];
  // const color5 = colors[`${colorVariant}5`];
  const dark18Color1 = darken(0.18, color1);
  const dark22Color1 = darken(0.22, color1);
  const dark27Color1 = darken(0.27, color1);

  /* eslint-disable no-unused-expressions */
  injectGlobal`
        .osm-ui-react-marker-${colorVariant} {
            color: ${dark27Color1};

            #colorized, #colorized * {
                fill: ${color2} !important;
            }
        }
    `;
  /* eslint-enable */

  return _.merge({}, baseConfig, {
    color: dark27Color1,
    backgroundColor: color2,
    borderColor: color1,
    loaderColor: dark27Color1,
    controlColor: color4,
    hoverControlColor: dark27Color1,

    sidebar: {
      nav: {
        color: dark27Color1,
        backgroundColor: color3,
        hoverColor: dark27Color1,
        hoverBackgroundColor: lighten(0.14, color3)
      }
    },
    toolbar: {
      button: {
        color: dark27Color1,
        backgroundColor: color2,
        borderColor: color1,
        hoverBackgroundColor: color3,
        hoverBorderColor: color2,
        focusBackgroundColor: color3,
        focusBorderColor: color2,
        activeBackgroundColor: color3,
        activeBorderColor: color2
      }
    },
    titlebar: {
      color: dark27Color1,
      backgroundColor: color2,
      borderColor: color2,

      button: {
        color: dark27Color1,
        backgroundColor: color2,
        borderColor: color2,
        hoverBackgroundColor: color3,
        hoverBorderColor: color3,
        focusBackgroundColor: color3,
        focusBorderColor: color3,
        activeBackgroundColor: color3,
        activeBorderColor: color3
      }
    },
    form: {
      button: {
        color: dark27Color1,
        backgroundColor: color2,
        borderColor: dark27Color1,
        hoverBackgroundColor: color3,
        hoverBorderColor: dark18Color1,
        focusBackgroundColor: color3,
        focusBorderColor: dark18Color1,
        activeBackgroundColor: color3,
        activeBorderColor: dark18Color1,

        primary: {
          color: color2,
          backgroundColor: dark22Color1,
          borderColor: dark27Color1,
          hoverBackgroundColor: dark18Color1,
          hoverBorderColor: dark22Color1,
          focusBackgroundColor: dark18Color1,
          focusBorderColor: dark22Color1,
          activeBackgroundColor: dark18Color1,
          activeBorderColor: dark22Color1
        }
      }
    },
    modal: {
      color: colors.dark27Color1,
      backgroundColor: makeTransparent(color2, 0.95)
    }
  });
}

export default {
  buildDarkThemeConfig,
  buildLightThemeConfig
};
