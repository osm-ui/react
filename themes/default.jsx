
import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { white, lightGray, darkGray, anthracite } from '../colors';


export const config = {
    color: anthracite,
    backgroundColor: white,
    borderColor: darkGray,
    borderStyle: 'solid',
    borderWidth: '4px',
    dividerColor: lightGray,
    form: {
        input: {
            borderRadius: 0,
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
