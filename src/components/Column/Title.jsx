import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classnames from 'classnames';

const StyledH2 = styled.h2`
  margin: -30px 0 50px;

  &.in-header {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin: 0 0 0 20px;
    line-height: 50px;
  }
`;

const ColumnTitle = ({ inHeader, className, children, ...rest }) => {
  const classes = classnames(className, {
    'column-title': true,
    'in-header': inHeader
  });

  return (
    <StyledH2 className={classes} {...rest}>
      {children}
    </StyledH2>
  );
};

ColumnTitle.propTypes = {
  inHeader: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

ColumnTitle.defaultProps = {
  inHeader: false,
  className: ''
};

ColumnTitle.displayName = 'Column.Title';

export default ColumnTitle;
