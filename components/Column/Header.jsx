import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const StyledDiv = styled.div`
    padding: 15px 20px 0;
`;


const ColumnHeader = ({ children, ...rest }) => (
    <StyledDiv className="column-header" {...rest}>{children}</StyledDiv>
);


ColumnHeader.propTypes = {
    children: PropTypes.node.isRequired,
};

ColumnHeader.displayName = 'Column.Header';

export default ColumnHeader;
