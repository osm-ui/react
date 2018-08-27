import React from 'react';
import styled from 'styled-components';

const StyledUl = styled.ul`
  margin: 0;
  padding: 0;
  color: ${props => props.theme.list.color};
  border-style: solid;
  border-color: ${props => props.theme.list.borderColor};
  border-width: 1px;
`;

const List = props => <StyledUl {...props} />;

List.propTypes = {};

List.defaultProps = {};

List.displayName = 'List';

export default List;
