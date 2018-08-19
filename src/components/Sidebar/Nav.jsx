import React from 'react';
import styled from 'styled-components';

const StyledNav = styled.nav`
  margin: 2rem 0;

  ul {
    text-align: center;
    list-style: none;
    margin: 0 0 4rem;
    padding: 0;
  }

  a {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-decoration: none;

    display: block;
    margin: 0.5rem 0;
    padding: 1.1rem 1.5rem;
    border-radius: ${p => p.theme.sidebar.nav.borderRadius};
    background-color: ${p => p.theme.sidebar.nav.backgroundColor};
    color: ${p => p.theme.sidebar.nav.color};
    font-size: ${p => p.theme.sidebar.nav.fontSize};
    line-height: ${p => p.theme.sidebar.nav.lineHeight};
    font-weight: ${p => p.theme.sidebar.nav.fontWeight};
  }

  a:hover,
  a:active,
  a:focus {
    text-decoration: none;
    color: ${p => p.theme.sidebar.nav.hoverColor};
    background-color: ${p => p.theme.sidebar.nav.hoverBackgroundColor};
  }
`;

const SidebarNav = props => <StyledNav {...props} />;

SidebarNav.propTypes = {};

SidebarNav.defaultProps = {};

SidebarNav.displayName = 'Sidebar.Nav';

export default SidebarNav;
