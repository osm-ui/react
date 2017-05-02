import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classnames from 'classnames';


const contexts = [
    '',
    'success',
    'warning',
    'error',
];

const colorsStyle = props => contexts.reduce((reducedStyles, context) => {
    if (!context) {
        return reducedStyles;
    }

    const controlColors = props.theme.form.input[context];
    const hintColors = props.theme.form.hint[context];

    return (`
        ${reducedStyles}

        &.has-${context} {
            .form-control {
                background-color: ${controlColors.backgroundColor};
                border-color: ${controlColors.borderColor};
            }

            .help-block {
                background-color: ${hintColors.backgroundColor};
                color: ${hintColors.color};
            }
        }
    `);
}, '');


const StyledDiv = styled.div`
    ${props => colorsStyle(props)}

    margin-bottom: 40px;
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
    context: PropTypes.oneOf(contexts),
};

FormGroup.defaultProps = {
    context: '',
};

FormGroup.displayName = 'Form.Group';

export default FormGroup;
