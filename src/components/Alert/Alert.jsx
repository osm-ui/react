import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styled from 'styled-components';

export const contexts = ['info', 'success', 'warning', 'danger'];

const colorsStyle = props =>
  contexts.reduce((reducedStyles, context) => {
    const colors = props.theme.alert[context];

    return `
      ${reducedStyles}

      &.alert-${context} {
          color: ${colors.color};
          background-color: ${colors.backgroundColor};

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
  padding-top: ${props => props.theme.alert.verticalPadding};
  padding-bottom: ${props => props.theme.alert.verticalPadding};
  padding-left: ${props => props.theme.alert.horizontalPadding};
  padding-right: ${props => props.theme.alert.horizontalPadding};
  border-radius: ${props => props.theme.alert.borderRadius};

  ${props => colorsStyle(props)};
`;

const Alert = ({ context, className, ...props }) => {
  const classes = classnames(className, {
    alert: true,
    [`alert-${context}`]: true
  });

  return <StyledDiv className={classes} {...props} />;
};

Alert.contexts = contexts;

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
