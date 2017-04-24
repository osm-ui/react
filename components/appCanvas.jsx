import React from 'react';
import styled from 'styled-components';


const StyledDiv = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
`;


const AppCanvas = props => <StyledDiv {...props} />;


AppCanvas.propTypes = {
};

AppCanvas.defaultProps = {
};

AppCanvas.displayName = 'AppCanvas';

export default AppCanvas;
