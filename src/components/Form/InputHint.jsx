import styled from 'styled-components';

const InputHint = styled.div.attrs({
  className: 'hint'
})`
  font-size: ${props => props.theme.form.hint.fontSize};
  color: ${props => props.theme.form.hint.color};
  background-color: ${props => props.theme.form.hint.backgroundColor};
  margin: ${props => props.theme.form.hint.margin};
  padding: ${props => props.theme.form.hint.padding};
  transition: all ease-in-out 0.15s;
  opacity: ${props =>
    props.disabled ? props.theme.form.hint.disabledOpacity : 1};
`;

InputHint.displayName = 'Form.InputHint';

export default InputHint;
