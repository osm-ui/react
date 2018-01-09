import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classnames from 'classnames';

const StyledDiv = styled.div`
  padding: 1.5rem 2rem 0;
`;

const SidebarHeader = ({ className, children, ...rest }) => (
  <StyledDiv className={classnames(className, 'sidebar-header')} {...rest}>
    {children}
  </StyledDiv>
);

SidebarHeader.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

SidebarHeader.defaultProps = {
  className: ''
};

SidebarHeader.displayName = 'Sidebar.Header';

export default SidebarHeader;
