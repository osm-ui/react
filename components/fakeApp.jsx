import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AppCanvas from './appCanvas';


const StyledAppCanvas = styled(AppCanvas)`
    height: 80vh;
    border: 1px solid #ccc;
    padding: 20px 40px;
`;


const FakeApp = ({ children, ...rest }) => (
    <StyledAppCanvas {...rest}>
        <h2>Application Content</h2>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Aliquam non cursus purus. Nullam vehicula,
            quam in rhoncus convallis, ligula est pellentesque quam,
            ut venenatis ex lorem vitae est.
            Etiam iaculis ante non orci euismod molestie.
            Phasellus non diam massa. Donec non enim nec dolor
            ullamcorper efficitur eget interdum justo.
        </p>
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
