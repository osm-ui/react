import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styled from 'styled-components';


const colorsStyle = props => (`
    &.btn-default {
        background-color: ${props.theme.form.button.backgroundColor};
        border-color: ${props.theme.form.button.borderColor};
    }

    &.btn-primary {
        background-color: ${props.theme.form.button.primaryBackgroundColor};
        border-color: ${props.theme.form.button.primaryBorderColor};
    }

    &.btn-success {
        background-color: ${props.theme.form.button.successBackgroundColor};
        border-color: ${props.theme.form.button.successBorderColor};
    }

    &.btn-info {
        background-color: ${props.theme.form.button.infoBackgroundColor};
        border-color: ${props.theme.form.button.infoBorderColor};
    }

    &.btn-warning {
        background-color: ${props.theme.form.button.warningBackgroundColor};
        border-color: ${props.theme.form.button.warningBorderColor};
    }

    &.btn-danger {
        background-color: ${props.theme.form.button.dangerBackgroundColor};
        border-color: ${props.theme.form.button.dangerBorderColor};
    }
`);

const StyledButton = styled.button`
    border-radius: ${props => props.theme.form.button.borderRadius};
    ${props => colorsStyle(props)}
`;

const StyledAnchor = styled.a`
    border-radius: ${props => props.theme.form.button.borderRadius};
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
    context: PropTypes.oneOf([
        'default',
        'primary',
        'info',
        'success',
        'warning',
        'danger',
        'link',
    ]),
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


export default Button;
