import React from 'react';
import styled from 'styled-components';
import 'semantic-ui-css/semantic.min.css';
import { Label as SUILabel } from 'semantic-ui-react';


const StyledBottomLabel = styled(SUILabel)`
    &&& {
        width: 100%;
        margin: 0;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        border-bottom-left-radius: ${props => props.theme.form.input.borderRadius};
        border-bottom-right-radius: ${props => props.theme.form.input.borderRadius};
    }
`;

const InputBottomLabel = props => (
    <StyledBottomLabel {...props} />
);


export default InputBottomLabel;
