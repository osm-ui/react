import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styled from 'styled-components';
import Transition from 'react-transition-group/Transition';
import FontAwesome from 'react-fontawesome';
import Button from 'components/Button';
import Form from 'components/Form';
import { colors } from 'constants/index';

const placeholder = 'Veuillez entrer une valeur';

export const statusValue = {
  ADD: 'add',
  MOD: 'mod',
  DEL: 'del'
};

const StyledDiv = styled.div`
  margin-bottom: 2rem;
  transition: opacity 300ms ease-in-out;

  .main {
    z-index: 1;
    position: relative;
    background-color: ${colors.white};
    display: flex;
    align-items: center;

    ${Button.style} {
      padding-left: 1rem;
      padding-right: 1rem;
      border-radius: 4px 0 0 4px;

      &:focus {
        outline: none;
      }
    }

    .value {
      flex: 1 0 10rem;
      line-height: 3rem;
      padding: 1px 0;
      padding-left: 1rem;
      border: 1px solid ${colors.lightGray3};
      border-left: none;
      border-radius: 0 4px 4px 0;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .actions {
      position: absolute;
      opacity: 0;
      display: flex;
      right: 0;
      top: 0;
      bottom: 0;

      transition: opacity 300ms ease-in-out;

      ${Button.style} {
        padding: 0 1rem;
      }

      .action {
        color: ${colors.white};
        line-height: 3rem;
        border: 2px solid transparent;
        cursor: pointer;
      }

      .del {
        background-color: ${colors.red2};
        border-color: ${colors.red1};
        border-radius: 0 4px 0 0;
      }

      .mod {
        background-color: ${colors.orange2};
        border-color: ${colors.orange1};
        border-radius: 0;
      }
    }
  }

  &.add ${Button.style}, &.add .value {
    border-color: ${colors.green3};
  }

  &.add ${Button.style} {
    color: ${colors.white};
    border-color: ${colors.green1};
    background-color: ${colors.green3};
  }

  &.mod ${Button.style}, &.mod .value {
    border-color: ${colors.orange3};
  }

  &.mod ${Button.style} {
    color: ${colors.white};
    border-color: ${colors.orange1};
    background-color: ${colors.orange2};
  }

  &.del ${Button.style}, &.del .value {
    border-color: ${colors.red3};
  }

  &.del ${Button.style} {
    color: ${colors.white};
    border-color: ${colors.red1};
    background-color: ${colors.red3};
  }

  &.missing .value {
    color: ${colors.red1};
    font-style: italic;
  }

  &.inactive,
  &.removed {
    opacity: 0.2;

    .input-container,
    .textarea-container {
      visibility: hidden;
    }
  }

  .input-container,
  .textarea-container {
    height: 3.4rem;
    z-index: 0;
    margin-top: -3.4rem;
    transition: margin-top 300ms ease-in-out, height 300ms ease-in-out;
  }

  ${Form.Input.style}, ${Form.Textarea.style} {
    line-height: 1.7rem;
    border-radius: 0 0 4px 4px;
  }

  &.selected {
    opacity: 1;

    ${Button.style} {
      border-radius: 4px 0 0 0;
    }

    .input-container,
    .textarea-container {
      margin-top: 0;
    }

    .textarea-container {
      height: 8rem;
    }

    .value {
      border-radius: 0 4px 0 0;
    }
  }
`;

const transitionStyles = {
  entered: {
    opacity: 1
  }
};

class Field extends React.Component {
  componentDidUpdate() {
    if (this.input) {
      if (this.props.isSelected) this.input.focus();
      else this.input.blur();

      if (this.props.value && this.input.type === 'text') {
        const position = this.props.value.length;
        this.input.setSelectionRange(position, position);
      }
    }
  }

  renderInput() {
    const { tag, value, modifyField } = this.props;

    const isValueTooLong = value && value.length > 15;

    return isValueTooLong ? (
      <Form.Textarea
        value={value || ''}
        placeholder={placeholder}
        innerRef={input => {
          this.input = input;
        }}
        onChange={event => modifyField(tag, event.target.value)}
        // we should probably add an onkeydown callback to close input on Enter
      />
    ) : (
      <Form.Input
        value={value || ''}
        placeholder={placeholder}
        innerRef={input => {
          this.input = input;
        }}
        onChange={event => modifyField(tag, event.target.value)}
        // we should probably add an onkeydown callback to close input on Enter
      />
    );
  }

  renderActions() {
    const { tag, status, isSelected, revertField, removeField } = this.props;

    return (
      <Transition
        in={isSelected}
        timeout={{
          enter: 0,
          exit: 300
        }}
        appear
        unmountOnExit
      >
        {state => (
          <div className="actions" style={transitionStyles[state]}>
            {status === 'mod' && (
              <Button
                shape="square"
                size="sm"
                onClick={() => revertField(tag)}
                className="action mod"
              >
                <FontAwesome name="undo" />
              </Button>
            )}
            {status !== 'del' && (
              <Button
                shape="square"
                size="sm"
                onClick={() => removeField(tag)}
                className="action del"
              >
                <FontAwesome name="times" />
              </Button>
            )}
          </div>
        )}
      </Transition>
    );
  }

  render() {
    const {
      tag,
      value,
      status,
      isSelected,
      isInactive,
      addField,
      selectField
    } = this.props;

    const isRemoved = status === statusValue.DEL;

    const classNames = classnames(status, {
      selected: isSelected,
      inactive: isInactive,
      removed: isRemoved,
      missing: !isRemoved && !value
    });

    return (
      <StyledDiv className={classNames}>
        <div className="main">
          <Button
            active={isSelected}
            shape="square"
            size="sm"
            className="tag"
            onClick={() => {
              if (isRemoved) addField(tag, value);
              else if (!isInactive) selectField(tag);
            }}
          >
            {tag}
          </Button>
          <div className="value">{value || placeholder}</div>
          {this.renderActions(tag, status)}
        </div>
        {!isRemoved && this.renderInput(tag, value)}
      </StyledDiv>
    );
  }
}

Field.propTypes = {
  tag: PropTypes.string.isRequired,
  status: PropTypes.string,
  value: PropTypes.string,
  isSelected: PropTypes.bool,
  isInactive: PropTypes.bool,
  addField: PropTypes.func,
  revertField: PropTypes.func,
  modifyField: PropTypes.func,
  removeField: PropTypes.func,
  selectField: PropTypes.func,
  className: PropTypes.string
};

Field.defaultProps = {
  status: null,
  value: null,
  isSelected: false,
  isInactive: false,
  addField: null,
  revertField: null,
  modifyField: null,
  removeField: null,
  selectField: null,
  className: ''
};

Field.displayName = 'Field';

export default Field;
