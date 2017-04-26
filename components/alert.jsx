import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styled from 'styled-components';


const contexts = [
    'info',
    'success',
    'warning',
    'danger',
];

const colorsStyle = props => contexts.reduce((reducedStyles, context) => {
    const colors = props.theme.alert[context];

    return (`
        ${reducedStyles}

        &.alert-${context} {
            color: ${colors.color};
            background-color: ${colors.backgroundColor};
            border-color: ${colors.borderColor};
        }
    `);
}, '');


const StyledDiv = styled.div`
    border-radius: ${props => props.theme.borderRadius};
    ${props => colorsStyle(props)}
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
    context: PropTypes.oneOf(contexts),
};


Alert.defaultProps = {
    context: 'info',
};

Alert.displayName = 'Alert';

export default Alert;
