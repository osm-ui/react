import _ from 'lodash';


export function buildDarkThemeConfig(baseConfig, colors, colorVariant) {
    const color1 = colors[`${colorVariant}1`];
    const color2 = colors[`${colorVariant}2`];
    const color3 = colors[`${colorVariant}3`];
    // const color4 = colors[`${colorVariant}4`];
    const color5 = colors[`${colorVariant}5`];

    return _.merge({}, baseConfig, {
        color: colors.white,
        backgroundColor: color2,
        borderColor: color1,
        loaderColor: colors.white,
        controlColor: color1,
        hoverControlColor: colors.white,

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
                    color: color2,
                    backgroundColor: colors.white,
                    borderColor: colors.white,
                    hoverBackgroundColor: colors.gray5,
                    hoverBorderColor: colors.gray5,
                    focusBackgroundColor: colors.gray5,
                    focusBorderColor: colors.gray5,
                    activeBackgroundColor: colors.gray5,
                    activeBorderColor: colors.gray5,
                },
            },
        },
    });
}


export default {
    buildDarkThemeConfig,
};
