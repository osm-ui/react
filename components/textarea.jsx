import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { TextArea } from 'semantic-ui-react';


const Textarea = props => (
    <TextArea {...props}>
        {props.children}
    </TextArea>
);


Textarea.propTypes = {
    children: React.PropTypes.element.isRequired,
};


export default Textarea;
