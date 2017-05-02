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
    'link',
];

const colorsStyle = props => contexts.reduce((reducedStyles, context) => {
    const colors = context === 'default'
        ? props.theme.form.button
        : props.theme.form.button[context];

    return (`
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
    `);
}, '');


const StyledButton = styled.button`
    ${props => colorsStyle(props)}
`;

const StyledAnchor = styled.a`
    ${colorsStyle}
`;


const Button = ({
    type,
    context,
    size,
    block,
    active,
    disabled,
    ...props
}) => {
    const classes = classnames({
        btn: true,
        [`btn-${context}`]: true,
        [`btn-${size}`]: true,
        'btn-block': block,
        active,
        disabled,
    });

    if (type === 'anchor') {
        return (
            <StyledAnchor className={classes} role="button" {...props} />
        );
    }

    return (
        <StyledButton className={classes} type={type} disabled={disabled} {...props} />
    );
};


Button.propTypes = {
    type: PropTypes.string,
    context: PropTypes.oneOf(contexts),
    size: PropTypes.oneOf([
        'lg',
        'md',
        'sm',
        'xs',
    ]),
    block: PropTypes.bool,
    active: PropTypes.bool,
    disabled: PropTypes.bool,
};

Button.defaultProps = {
    type: 'button',
    context: 'default',
    size: 'md',
    block: false,
    active: false,
    disabled: false,
};

Button.displayName = 'Button';

export default Button;
