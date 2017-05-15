import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classnames from 'classnames';


const StyledDiv = styled.div`
    font-size: ${props => props.theme.form.hint.fontSize};
    color: ${props => props.theme.form.hint.color};
    background-color: ${props => props.theme.form.hint.backgroundColor};
    margin: ${props => props.theme.form.hint.margin};
    padding: ${props => props.theme.form.hint.padding};
`;

const InputHint = ({ className, ...props }) => (
    <StyledDiv className={classnames(className, 'help-block')} {...props} />
);


InputHint.propTypes = {
    className: PropTypes.string,
};

InputHint.defaultProps = {
    className: '',
};

InputHint.displayName = 'Form.InputHint';

export default InputHint;
