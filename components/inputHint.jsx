import React from 'react';
import styled from 'styled-components';


const StyledDiv = styled.div`
    font-size: ${props => props.theme.form.hint.fontSize};
    color: ${props => props.theme.form.hint.color};
    background-color: ${props => props.theme.form.hint.backgroundColor};
    margin: ${props => props.theme.form.hint.margin};
    padding: ${props => props.theme.form.hint.padding};
`;

const InputHint = props => (
    <StyledDiv className="help-block" {...props} />
);


export default InputHint;
