import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styled from 'styled-components';


const StyledButton = styled.button`
    border-radius: ${props => props.theme.form.input.borderRadius};
`;

const StyledAnchor = styled.a`
    border-radius: ${props => props.theme.form.input.borderRadius};
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
