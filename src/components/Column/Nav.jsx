import React from 'react';
import styled from 'styled-components';

const StyledNav = styled.nav`
  margin: 20px 0;

  ul {
    text-align: center;
    list-style: none;
    margin: 0 0 40px;
    padding: 0;
  }

  a {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    display: block;
    margin: 10px 0;
    padding: 14px 20px;
    border-radius: ${props => props.theme.column.nav.borderRadius};
    background-color: ${props => props.theme.column.nav.backgroundColor};
    color: ${props => props.theme.column.nav.color};
    font-size: ${props => props.theme.column.nav.fontSize};
    line-height: ${props => props.theme.column.nav.lineHeight};
    font-weight: ${props => props.theme.column.nav.fontWeight};
  }

  a:hover,
  a:active,
  a:focus {
    text-decoration: none;
    color: ${props => props.theme.column.nav.hoverColor};
    background-color: ${props => props.theme.column.nav.hoverBackgroundColor};
  }
`;

const ColumnNav = props => <StyledNav {...props} />;

ColumnNav.propTypes = {};

ColumnNav.defaultProps = {};

ColumnNav.displayName = 'Column.Nav';

export default ColumnNav;
