import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Lorem from 'react-lorem-component';
import { TextGround } from 'text-ground-react';
import AppCanvas from '../../components/AppCanvas';


const StyledAppCanvas = styled(AppCanvas)`
    height: 80vh;
    border: 1px solid #ccc;
    padding: 20px 40px;
`;

const Content = styled.section`
    opacity: ${props => (props.dimmed ? 0.2 : 1)};
`;


const FakeApp = ({
    fakeText,
    dimmed,
    children,
    ...rest
}) => (
    <StyledAppCanvas {...rest}>
        <Content dimmed={dimmed}>
            <h2>{ fakeText ? <TextGround rows={1} /> : 'Application Content' }</h2>
            { fakeText ? <TextGround rows={10} /> : <Lorem count={2} /> }
        </Content>
        {children}
    </StyledAppCanvas>
);


FakeApp.propTypes = {
    fakeText: PropTypes.bool,
    dimmed: PropTypes.bool,
    children: PropTypes.node,
};

FakeApp.defaultProps = {
    fakeText: false,
    dimmed: false,
    children: '',
};

FakeApp.displayName = 'FakeApp';

export default FakeApp;
