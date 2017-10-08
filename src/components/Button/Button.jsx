import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styled from 'styled-components';

const contexts = [
  'default',
  'primary',
  'info',
  'success',
  'warning',
  'danger',
  'link'
];

const colorsStyle = props =>
  contexts.reduce((reducedStyles, context) => {
    const colors =
      context === 'default'
        ? props.theme.form.button
        : props.theme.form.button[context];

    return `
        ${reducedStyles}

        &.btn-${context} {
            font-weight: ${colors.fontWeight};
            color: ${colors.color};
            background-color: ${colors.backgroundColor};
            border-color: ${colors.borderColor};

            &:hover {
                color: ${colors.color};
                background-color: ${colors.hoverBackgroundColor};
                border-color: ${colors.hoverBorderColor};
            }

            &:focus {
                color: ${colors.color};
                background-color: ${colors.focusBackgroundColor};
                border-color: ${colors.focusBorderColor};
            }

            &:active, .active {
                color: ${colors.color};
                background-color: ${colors.activeBackgroundColor};
                border-color: ${colors.activeBorderColor};
            }
        }
    `;
  }, '');

const StyledButton = styled.button`
  ${props => colorsStyle(props)} border-radius: ${props =>
      props.theme.form.button.borderRadius};

  &.shape-round {
    &.btn-xs {
      height: 25px;
      border-radius: 12.5px;
      padding: 1px 14px;
    }

    &.btn-sm {
      height: 33px;
      border-radius: 16.5px;
      padding: 5px 16px;
    }

    &.btn-md {
      height: 42px;
      border-radius: 21px;
      padding: 6px 20px;
    }

    &.btn-lg {
      height: 49px;
      border-radius: 24.5px;
      padding: 10px 24px;
    }
  }
`;

const StyledAnchor = StyledButton.withComponent('a');

const Button = ({
  type,
  context,
  shape,
  size,
  block,
  active,
  disabled,
  className,
  ...props
}) => {
  const classes = classnames(className, {
    btn: true,
    [`shape-${shape}`]: true,
    [`btn-${context}`]: true,
    [`btn-${size}`]: true,
    'btn-block': block,
    active,
    disabled
  });

  if (type === 'anchor') {
    return (
      <StyledAnchor
        className={classes}
        disabled={disabled}
        role="button"
        {...props}
      />
    );
  }

  return (
    <StyledButton
      className={classes}
      type={type}
      disabled={disabled}
      {...props}
    />
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'submit', 'reset', 'anchor']),
  context: PropTypes.oneOf(contexts),
  shape: PropTypes.oneOf(['square', 'round']),
  size: PropTypes.oneOf(['lg', 'md', 'sm', 'xs']),
  block: PropTypes.bool,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string
};

Button.defaultProps = {
  type: 'button',
  context: 'default',
  shape: 'round',
  size: 'md',
  block: false,
  active: false,
  disabled: false,
  className: ''
};

Button.displayName = 'Button';

export default Button;
