import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classnames from 'classnames';


const StyledH2 = styled.h2`
    margin: 0 0 30px;

    &.in-header {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin: 0 0 0 20px;
        line-height: 50px;
    }
`;


const ColumnTitle = ({ children, inHeader, className, ...rest }) => {
    const classes = classnames(className, {
        'column-title': true,
        'in-header': inHeader,
    });

    return (
        <StyledH2 className={classes} {...rest}>{children}</StyledH2>
    );
};


ColumnTitle.propTypes = {
    children: PropTypes.node.isRequired,
    inHeader: PropTypes.bool,
    className: PropTypes.string,
};

ColumnTitle.defaultProps = {
    inHeader: false,
    className: '',
};

ColumnTitle.displayName = 'Column.Title';

export default ColumnTitle;
