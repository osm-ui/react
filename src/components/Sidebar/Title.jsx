import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classnames from 'classnames';

const StyledH2 = styled.h2`
  margin: -3rem 0 5rem;

  &.in-header {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin: 0 0 0 2rem;
    line-height: 5rem;
  }
`;

const SidebarTitle = ({ inHeader, className, children, ...rest }) => {
  const classes = classnames(className, {
    'sidebar-title': true,
    'in-header': inHeader
  });

  return (
    <StyledH2 className={classes} {...rest}>
      {children}
    </StyledH2>
  );
};

SidebarTitle.propTypes = {
  inHeader: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

SidebarTitle.defaultProps = {
  inHeader: false,
  className: ''
};

SidebarTitle.displayName = 'Sidebar.Title';

export default SidebarTitle;
