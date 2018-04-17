import React from 'react';
import styled from 'styled-components';

const StyledLi = styled.li`
  color: ${props => props.theme.list.color};
  background: ${props => props.theme.list.backgroundColor};
  border-color: ${props => props.theme.list.borderColor};
`;

const ListItem = props => <StyledLi className="list-group-item" {...props} />;

ListItem.propTypes = {};

ListItem.defaultProps = {};

ListItem.displayName = 'List.Item';

export default ListItem;
