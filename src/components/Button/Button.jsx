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
    const isLink = context === 'link';
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
          ${isLink ? 'cursor: pointer;' : ''}

          &:hover {
            background-color: ${colors.hoverBackgroundColor};
            ${isLink ? 'text-decoration: underline;' : ''}
          }

          &:focus {
            outline: none;
            border-color: ${colors.outlineColor};
            background-color: ${colors.focusBackgroundColor};
            ${isLink ? 'text-decoration: underline;' : ''}
          }

          &:active {
            ${!isLink ? 'border-color: transparent;' : ''}
            background-color: ${colors.activeBackgroundColor};
            ${isLink ? 'text-decoration: none;' : ''}
          }
        }
    `;
  }, '');

const StyledButton = styled.button`
  border: 2px solid transparent;
  border-radius: ${p => p.theme.form.button.borderRadius};

  /* prettier-ignore */
  ${p => colorsStyle(p)}

  &:disabled,
  &.disabled {
    opacity: .6;
  }

  &.btn-block {
    display: block;
    width: 100%;
  }

  &.btn-xs {
    font-size: 0.7rem;
    line-height: 1.2rem;
    padding-left: 0.7rem;
    padding-right: 0.7rem;
  }

  &.btn-sm {
    font-size: 0.8rem;
    line-height: 1.6rem;
    padding-left: 0.9rem;
    padding-right: 0.9rem;
  }

  &.btn-md {
    font-size: 0.9rem;
    line-height: 2.2rem;
    padding-left: 1.2rem;
    padding-right: 1.2rem;
  }

  &.btn-lg {
    font-size: 1.2rem;
    line-height: 2.6rem;
    padding-left: 1.4rem;
    padding-right: 1.4rem;
  }

  &.shape-round {
    &.btn-xs {
      border-radius: 1.4rem;
    }

    &.btn-sm {
      border-radius: 1.6rem;
    }

    &.btn-md {
      border-radius: 2.2rem;
    }

    &.btn-lg {
      border-radius: 2.6rem;
    }
  }
`;

const StyledAnchor = StyledButton.withComponent('a').extend`
  display: inline-block;
  text-decoration: none;
`;

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

Button.contexts = contexts;

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
  shape: 'square',
  size: 'md',
  block: false,
  active: false,
  disabled: false,
  className: ''
};

Button.displayName = 'Button';
Button.style = StyledButton;

export default Button;
