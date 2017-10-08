import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Lorem from 'react-lorem-component';
import ReactPlaceholder from 'react-placeholder';
import Section from '../../components/Section';

const StyledSection = styled(Section)`
  height: 80vh !important;
  border: 1px solid #ccc;
  padding: 20px 40px;
`;

const FakeApp = ({ fakeText, dimmed, children, ...rest }) => (
  <StyledSection appCanvas {...rest}>
    <Section dimmed={dimmed}>
      <h2>
        {fakeText ? (
          <ReactPlaceholder type="text" rows={1} />
        ) : (
          'Application Content'
        )}
      </h2>
      {fakeText ? (
        <ReactPlaceholder type="text" rows={10} />
      ) : (
        <Lorem count={2} />
      )}
    </Section>
    {children}
  </StyledSection>
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
