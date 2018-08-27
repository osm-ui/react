import React from 'react';
import styled from 'styled-components';

const StyledLi = styled.li`
  list-style-type: none;
  list-style-position: outside;
  font-size: ${p => p.theme.list.fontSize};
  font-family: ${p => p.theme.font};
  color: ${p => p.theme.list.color};
  background: ${p => p.theme.list.backgroundColor};
  border-style: solid;
  border-color: ${p => p.theme.list.borderColor};
  border-width: 0 0 1px 0;
  margin: 0;
  padding: 0.8rem 1.1rem;

  &:last-child {
    border-bottom-width: 0;
  }
`;

const ListItem = props => <StyledLi {...props} />;

ListItem.propTypes = {};

ListItem.defaultProps = {};

ListItem.displayName = 'List.Item';

export default ListItem;
