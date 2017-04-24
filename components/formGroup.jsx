import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classnames from 'classnames';


const StyledDiv = styled.div`
    &.has-success {
        .form-control {
            background-color: ${props => props.theme.form.input.success.backgroundColor};
            border-color: ${props => props.theme.form.input.success.borderColor};
        }

        .help-block {
            background-color: ${props => props.theme.form.hint.success.backgroundColor};
            color: ${props => props.theme.form.hint.success.color};
        }
    }

    &.has-warning {
        .form-control {
            background-color: ${props => props.theme.form.input.warning.backgroundColor};
            border-color: ${props => props.theme.form.input.warning.borderColor};
        }

        .help-block {
            background-color: ${props => props.theme.form.hint.warning.backgroundColor};
            color: ${props => props.theme.form.hint.warning.color};
        }
    }

    &.has-error {
        .form-control {
            background-color: ${props => props.theme.form.input.error.backgroundColor};
            border-color: ${props => props.theme.form.input.error.borderColor};
        }

        .help-block {
            background-color: ${props => props.theme.form.hint.error.backgroundColor};
            color: ${props => props.theme.form.hint.error.color};
        }
    }
`;


const FormGroup = ({
    context,
    ...props
}) => {
    const classes = classnames({
        'form-group': true,
        [`has-${context}`]: context !== '',
    });

    return (
        <StyledDiv className={classes} {...props} />
    );
};


FormGroup.propTypes = {
    context: PropTypes.string,
};


FormGroup.defaultProps = {
    context: '',
};


export default FormGroup;
