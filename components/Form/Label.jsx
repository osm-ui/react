import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classnames from 'classnames';


const StyledLabel = styled.label`
    color: ${props => props.theme.color}
    margin-bottom: 6px;
    font-size: 1.1em;
    font-weight: 400;
`;

const Label = ({
    htmlFor,
    ...props
}) => {
    const classes = classnames({
        'control-label': true,
    });

    return (
        <StyledLabel htmlFor={htmlFor} className={classes} {...props} />
    );
};


Label.propTypes = {
    htmlFor: PropTypes.string,
};

Label.defaultProps = {
    htmlFor: '',
};

Label.displayName = 'Form.Label';

export default Label;
