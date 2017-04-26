import React from 'react';
import FormGroup from './formGroup';


const Form = props => (
    <form {...props} />
);


Form.propTypes = {
};

Form.defaultProps = {
};

Form.displayName = 'Form';


Form.Group = FormGroup;

Form.Group.displayName = 'Form.Group';

export default Form;
