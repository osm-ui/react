import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classnames from 'classnames';


const StyledDiv = styled.div`
    &.has-success {
        .form-control {
            background-color: ${props => props.theme.form.input.successBackgroundColor};
            border-color: ${props => props.theme.form.input.successBorderColor};
        }

        .help-block {
            background-color: ${props => props.theme.form.hint.successBackgroundColor};
            color: ${props => props.theme.form.hint.successColor};
        }
    }

    &.has-warning {
        .form-control {
            background-color: ${props => props.theme.form.input.warningBackgroundColor};
            border-color: ${props => props.theme.form.input.warningBorderColor};
        }

        .help-block {
            background-color: ${props => props.theme.form.hint.warningBackgroundColor};
            color: ${props => props.theme.form.hint.warningColor};
        }
    }

    &.has-error {
        .form-control {
            background-color: ${props => props.theme.form.input.errorBackgroundColor};
            border-color: ${props => props.theme.form.input.errorBorderColor};
        }

        .help-block {
            background-color: ${props => props.theme.form.hint.errorBackgroundColor};
            color: ${props => props.theme.form.hint.errorColor};
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
