import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';


const FormGroup = ({
    context,
    ...props
}) => {
    const classes = classnames({
        'form-group': true,
        [`has-${context}`]: context !== '',
    });

    return (
        <div className={classes} {...props} />
    );
};


FormGroup.propTypes = {
    context: PropTypes.string,
};


FormGroup.defaultProps = {
    context: '',
};


export default FormGroup;
