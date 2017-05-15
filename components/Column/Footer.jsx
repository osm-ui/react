import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classnames from 'classnames';


const StyledDiv = styled.div`
    padding: 20px 20px;
    border-color: ${props => props.theme.borderColor};
    border-style: ${props => props.theme.borderStyle};
    border-width: 1px 0 0 0;
`;


const ColumnFooter = ({ className, children, ...rest }) => (
    <StyledDiv className={classnames(className, 'column-footer')} {...rest}>
        {children}
    </StyledDiv>
);


ColumnFooter.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
};

ColumnFooter.defaultProps = {
    className: '',
};

ColumnFooter.displayName = 'Column.Footer';

export default ColumnFooter;
