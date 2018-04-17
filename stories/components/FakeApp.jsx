import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Lorem from 'react-lorem-component';
import ReactPlaceholder from 'react-placeholder';
import { Section } from 'index';

const App = styled(Section)`
  height: 80vh !important;
  border: 1px solid #ccc;
  padding: 2rem 4rem;
`;

const Content = styled(Section)`
  margin-bottom: 4rem;
`;

const Title = styled.h2`
  margin-bottom: 3rem;
`;

const FakeApp = ({ fakeText, dimmed, children, ...rest }) => (
  <App appCanvas {...rest}>
    <Content dimmed={dimmed}>
      <Title>
        <ReactPlaceholder ready={!fakeText} type="text" rows={1}>
          Application Content
        </ReactPlaceholder>
      </Title>
      <ReactPlaceholder ready={!fakeText} type="text" rows={10}>
        <Lorem count={2} />
      </ReactPlaceholder>
    </Content>
    {children}
  </App>
);

FakeApp.propTypes = {
  fakeText: PropTypes.bool,
  dimmed: PropTypes.bool,
  children: PropTypes.node
};

FakeApp.defaultProps = {
  fakeText: false,
  dimmed: false,
  children: ''
};

FakeApp.displayName = 'FakeApp';

export default FakeApp;
