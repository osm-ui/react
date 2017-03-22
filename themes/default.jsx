
import React from 'react';
import { ThemeProvider } from 'styled-components';


export const config = {
    form: {
        input: {
            borderRadius: 0,
        },
    },
};


export default props => (
    <ThemeProvider theme={config} {...props} />
);
