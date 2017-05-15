import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classnames from 'classnames';


const StyledDiv = styled.div`
    padding: 15px 20px 0;
`;


const ColumnHeader = ({ className, children, ...rest }) => (
    <StyledDiv className={classnames(className, 'column-header')} {...rest}>
        {children}
    </StyledDiv>
);


ColumnHeader.propTypes = {
    className: PropTypes.string,
        children: PropTypes.node.isRequired,
};

ColumnHeader.defaultProps = {
    className: '',
};

ColumnHeader.displayName = 'Column.Header';

export default ColumnHeader;
