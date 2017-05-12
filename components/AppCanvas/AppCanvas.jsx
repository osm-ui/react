import React from 'react';
import styled from 'styled-components';


const StyledDiv = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;

    color: ${props => props.theme.color};
    background-color: ${props => props.theme.backgroundColor};
`;


const AppCanvas = props => <StyledDiv {...props} />;


AppCanvas.propTypes = {
};

AppCanvas.defaultProps = {
};

AppCanvas.displayName = 'AppCanvas';

export default AppCanvas;
