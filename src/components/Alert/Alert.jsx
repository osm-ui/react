import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styled from 'styled-components';

import { contexts } from '../../constants';

const colorsStyle = props =>
  contexts.reduce((reducedStyles, context) => {
    const colors = props.theme.alert[context];

    return `
      ${reducedStyles}

      &.alert-${context} {
          color: ${colors.color};
          background-color: ${colors.backgroundColor};
          border-color: ${colors.borderColor};

          a {
              color: ${colors.color};
              text-decoration: underline;
          }

          a:hover, a:focus, a:active {
              color: ${colors.color};
              text-decoration: none;
          }
      }
    `;
  }, '');

const StyledDiv = styled.div`
  border-radius: ${props => props.theme.borderRadius};
  ${props => colorsStyle(props)};
`;

const Alert = ({ context, className, ...props }) => {
  const classes = classnames(className, {
    alert: true,
    [`alert-${context}`]: true
  });

  return <StyledDiv className={classes} {...props} />;
};

Alert.propTypes = {
  context: PropTypes.oneOf(contexts),
  className: PropTypes.string
};

Alert.defaultProps = {
  context: 'info',
  className: ''
};

Alert.displayName = 'Alert';

export default Alert;
