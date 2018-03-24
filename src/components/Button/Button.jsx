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
    font-size: 1.2rem;
    line-height: 2.1rem;
    padding: 0 1.4rem;
  }

  &.btn-sm {
    line-height: 3rem;
    padding: 0 1.6rem;
  }

  &.btn-md {
    line-height: 3.8rem;
    padding: 0 2rem;
  }

  &.btn-lg {
    line-height: 4.5rem;
    padding: 0 2.4rem;
  }

  &.shape-round {
    &.btn-xs {
      border-radius: 1.25rem;
    }

    &.btn-sm {
      border-radius: 1.7rem;
    }

    &.btn-md {
      border-radius: 2.1rem;
    }

    &.btn-lg {
      border-radius: 2.45rem;
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
  shape: 'round',
  size: 'md',
  block: false,
  active: false,
  disabled: false,
  className: ''
};

Button.displayName = 'Button';
Button.style = StyledButton;

export default Button;
