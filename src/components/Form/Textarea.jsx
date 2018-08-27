import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classnames from 'classnames';
import InputHint from './InputHint';

const StyledTextArea = styled.textarea`
  opacity: ${p => p.theme.form.input.opacity};
  resize: ${p => p.resize};
  background-color: ${p => p.theme.form.input.backgroundColor};
  border-style: solid;
  border-color: ${p => p.theme.form.input.borderColor};
  border-width: ${p => p.theme.form.input.borderWidth};
  border-radius: ${p => p.theme.form.input.borderRadius};
  box-shadow: ${p => p.theme.form.input.boxShadow};
  padding: 0.6rem 0.8rem;
  width: 100%;
  font-size: ${p => p.theme.form.input.fontSize};
  line-height: ${p => p.theme.form.input.lineHeight};
  color: ${p => p.theme.color};

  /* prettier-ignore */
  ${p => (p.hasHint ? 'border-bottom-left-radius: 0;' : '')}
  ${p => (p.hasHint ? 'border-bottom-right-radius: 0;' : '')}

  &:focus {
    opacity: ${p => p.theme.form.input.focusOpacity};
    background-color: ${p => p.theme.form.input.focusBackgroundColor};
    border-color: ${p => p.theme.form.input.focusBorderColor};
    box-shadow: ${p => p.theme.form.input.focusBoxShadow};
  }

  &:disabled {
    opacity: ${p => p.theme.form.input.disabledOpacity};
  }
`;

const Textarea = ({
  rows,
  disabled,
  hint,
  className,
  innerRef,
  style,
  ...props
}) => (
  <div className="textarea-container" style={style}>
    <StyledTextArea
      className={classnames(className, 'input')}
      rows={rows}
      disabled={disabled}
      innerRef={innerRef}
      hasHint={!!hint}
      {...props}
    />
    {!!hint && <InputHint disabled={disabled}>{hint}</InputHint>}
  </div>
);

Textarea.propTypes = {
  rows: PropTypes.number,
  disabled: PropTypes.bool,
  hint: PropTypes.string,
  resize: PropTypes.oneOf(['none', 'vertical', 'horizontal']),
  innerRef: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object
};

Textarea.defaultProps = {
  rows: 6,
  disabled: false,
  hint: '',
  resize: 'vertical',
  innerRef: null,
  className: '',
  style: null
};

Textarea.displayName = 'Form.Textarea';
Textarea.style = StyledTextArea;

export default Textarea;
