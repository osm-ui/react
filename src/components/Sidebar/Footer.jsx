import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classnames from 'classnames';

const StyledDiv = styled.div`
  padding: 2rem 2rem;
`;

const SidebarFooter = ({ className, children, ...rest }) => (
  <StyledDiv className={classnames(className, 'sidebar-footer')} {...rest}>
    {children}
  </StyledDiv>
);

SidebarFooter.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

SidebarFooter.defaultProps = {
  className: ''
};

SidebarFooter.displayName = 'Sidebar.Footer';

export default SidebarFooter;
