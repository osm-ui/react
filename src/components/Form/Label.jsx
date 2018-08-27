import styled from 'styled-components';

const Label = styled.label`
  color: ${p => p.theme.form.label.color};
  background-color: ${p => p.theme.form.label.backgroundColor};
  font-size: ${p => p.theme.form.label.fontSize};
  font-weight: ${p => p.theme.form.label.fontWeight};
  line-height: ${p => p.theme.form.label.lineHeight};
`;

Label.displayName = 'Form.Label';

export default Label;
