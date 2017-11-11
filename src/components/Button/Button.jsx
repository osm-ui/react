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
  /* prettier-ignore */
  ${props => colorsStyle(props)}

  border-style: ${props => props.theme.form.button.borderStyle};
  border-width: ${props => props.theme.form.button.borderWidth};
  border-radius: ${props => props.theme.form.button.borderRadius};

  &.btn-xs {
    font-size: 12px;
    line-height: 21px;
    padding: 0 14px;
  }

  &.btn-sm {
    line-height: 30px;
    padding: 0 16px;
  }

  &.btn-md {
    line-height: 38px;
    padding: 0 20px;
  }

  &.btn-lg {
    line-height: 45px;
    padding: 0 24px;
  }

  &.shape-round {
    &.btn-xs {
      border-radius: 12.5px;
    }

    &.btn-sm {
      border-radius: 17px;
    }

    &.btn-md {
      border-radius: 21px;
    }

    &.btn-lg {
      border-radius: 24.5px;
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
