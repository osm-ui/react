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

    display: block;
    margin: 1rem 0;
    padding: 1.4rem 2rem;
    border-radius: ${props => props.theme.sidebar.nav.borderRadius};
    background-color: ${props => props.theme.sidebar.nav.backgroundColor};
    color: ${props => props.theme.sidebar.nav.color};
    font-size: ${props => props.theme.sidebar.nav.fontSize};
    line-height: ${props => props.theme.sidebar.nav.lineHeight};
    font-weight: ${props => props.theme.sidebar.nav.fontWeight};
  }

  a:hover,
  a:active,
  a:focus {
    text-decoration: none;
    color: ${props => props.theme.sidebar.nav.hoverColor};
    background-color: ${props => props.theme.sidebar.nav.hoverBackgroundColor};
  }
`;

const SidebarNav = props => <StyledNav {...props} />;

SidebarNav.propTypes = {};

SidebarNav.defaultProps = {};

SidebarNav.displayName = 'Sidebar.Nav';

export default SidebarNav;
