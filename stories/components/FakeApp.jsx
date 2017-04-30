import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Lorem from 'react-lorem-component';
import AppCanvas from '../../components/AppCanvas';


const StyledAppCanvas = styled(AppCanvas)`
    height: 80vh;
    border: 1px solid #ccc;
    padding: 20px 40px;
`;


const FakeApp = ({ children, ...rest }) => (
    <StyledAppCanvas {...rest}>
        <h2>Application Content</h2>
        <Lorem count={2} />
        {children}
    </StyledAppCanvas>
);


FakeApp.propTypes = {
    children: PropTypes.node,
};

FakeApp.defaultProps = {
    children: '',
};

FakeApp.displayName = 'FakeApp';

export default FakeApp;
