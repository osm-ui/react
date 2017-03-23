import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Form as SUIForm } from 'semantic-ui-react';


const Form = props => (
    <SUIForm {...props} />
);


Form.propTypes = {
    ...SUIForm.propTypes,
};


Form.defaultProps = {
    ...SUIForm.defaultProps,
};


export default Form;
