import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const StyledDiv = styled.div`
    padding: 20px 20px;
    border-color: ${props => props.theme.borderColor};
    border-style: ${props => props.theme.borderStyle};
    border-width: 1px 0 0 0;
`;


const ColumnFooter = ({ children, ...rest }) => (
    <StyledDiv className="column-footer" {...rest}>{children}</StyledDiv>
);


ColumnFooter.propTypes = {
    children: PropTypes.node.isRequired,
};

ColumnFooter.displayName = 'Column.Footer';

export default ColumnFooter;
