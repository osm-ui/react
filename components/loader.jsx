import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';


const rotate360 = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`;


const Spinner = styled.div`
    width: ${props => props.spinnerSize}px;
    height: ${props => props.spinnerSize}px;
    margin: 0 auto;
    border: 3px solid ${props => props.theme.loaderColor};
    border-radius: 50%;
    border-left-color: transparent;
    border-bottom-color: transparent;
    border-right-color: transparent;
    animation: ${rotate360} 650ms infinite linear;
`;

const StyledDiv = styled.div`
    text-align: center;

    .loader-label {
        color: ${props => props.theme.loaderColor};
        margin-top: 15px;
    }
`;


const Loader = ({ spinnerSize, label, ...rest }) => (
    <StyledDiv {...rest}>
        <Spinner spinnerSize={spinnerSize} />
        {label && <div className="loader-label">{label}</div>}
    </StyledDiv>
);


Loader.propTypes = {
    spinnerSize: PropTypes.number,
    label: PropTypes.string,
};

Loader.defaultProps = {
    spinnerSize: 40,
    label: '',
};

Loader.displayName = 'Loader';

export default Loader;
