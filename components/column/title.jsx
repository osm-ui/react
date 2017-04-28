import React from 'react';
import PropTypes from 'prop-types';


const ColumnTitle = ({ children, ...rest }) => (
    <h2 className="title" {...rest}>{children}</h2>
);


ColumnTitle.propTypes = {
    children: PropTypes.element.isRequired,
};

ColumnTitle.displayName = 'Column.Title';

export default ColumnTitle;
