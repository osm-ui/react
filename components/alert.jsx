import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styled from 'styled-components';


const StyledDiv = styled.div`
    border-radius: ${props => props.theme.borderRadius};
`;


const Alert = ({
    context,
    ...props
}) => {
    const classes = classnames({
        alert: true,
        [`alert-${context}`]: true,
    });

    return (
        <StyledDiv className={classes} {...props} />
    );
};


Alert.propTypes = {
    context: PropTypes.oneOf([
        'default',
        'primary',
        'info',
        'success',
        'warning',
        'danger',
    ]),
};


Alert.defaultProps = {
    context: 'default',
};


export default Alert;
