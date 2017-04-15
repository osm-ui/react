
import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import {
    white,
    lightGray,
    gray,
    darkGray,
    lightAnthracite,
    anthracite,
} from '../colors';


export const config = {
    color: anthracite,
    backgroundColor: white,
    borderColor: darkGray,
    dimmerBackgroundColor: white,
    loaderColor: lightAnthracite,
    borderStyle: 'solid',
    borderWidth: '4px',
    borderRadius: 0,
    dividerColor: gray,

    form: {
        input: {
            opacity: 0.8,
            backgroundColor: white,
            focusedOpacity: 1,
            focusedBackgroundColor: white,
            borderRadius: 0,
            boxShadow: 'inset 0 1px 1px rgba(0, 0, 0, 0.075)',
            focusedBoxShadow: 'inset 0 1px 1px rgba(0, 0, 0, 0.075)',
        },
        hint: {
            backgroundColor: lightGray,
            color: lightAnthracite,
            fontSize: '0.9em',
            margin: 0,
            padding: '5px 10px',
        },
    },
};


const DefaultTheme = ({ children, ...rest }) => (
    <ThemeProvider theme={config} {...rest}>
        <div>
            {children}
        </div>
    </ThemeProvider>
);


DefaultTheme.propTypes = {
    children: PropTypes.node.isRequired,
};


export default DefaultTheme;
