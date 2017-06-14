
import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import _ from 'lodash';
import colors from '../colors';
import { buildDarkThemeConfig } from '../helpers/themes';
import {
    config as defaultThemeConfig,
    StyledSpan,
} from './Default';


export const config = _.merge(
    {},
    buildDarkThemeConfig(defaultThemeConfig, colors, 'red'),
    {
        form: {
            button: {
                danger: {
                    color: colors.white,
                    backgroundColor: colors.red1,
                    borderColor: colors.red1,
                    hoverBackgroundColor: colors.red3,
                    hoverBorderColor: colors.red3,
                    focusBackgroundColor: colors.red3,
                    focusBorderColor: colors.red3,
                    activeBackgroundColor: colors.red3,
                    activeBorderColor: colors.red3,
                },
            },
        },
    },
);


const RedTheme = ({ children, ...rest }) => (
    <ThemeProvider theme={config}>
        <StyledSpan>
            {
                React.Children.map(children,
                    (child) => {
                        if (React.isValidElement(child)) {
                            return React.cloneElement(child, rest);
                        }

                        return child;
                    }
                )
            }
        </StyledSpan>
    </ThemeProvider>
);


RedTheme.propTypes = {
    children: PropTypes.node.isRequired,
};

RedTheme.displayName = 'RedTheme';

export default RedTheme;
