import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';
import { colors } from 'constants/index';
import Button from 'components/Button';
import Form from 'components/Form';
import Field, { statusValue as status } from './Field';

const StyledDiv = styled.div`
  max-width: 40rem;

  .removedList {
    margin-top: 3rem;

    & > div:first-child {
      margin-bottom: 1rem;
      font-size: 2rem;
      font-weight: bold;
    }
  }

  .add-item {
    transition: opacity 300ms ease-in-out;

    .input-container {
      display: inline-block;
    }

    &.inactive {
      opacity: 0.2;
    }

    .add-button-container {
      display: inline-block;
      vertical-align: top;
      background-color: ${colors.white};
      margin-left: -15rem;
      transition: margin-left 300ms ease-in-out, width 300ms ease-in-out;
    }

    .input-container,
    .add-button-container {
      width: 15rem;
    }

    span {
      transition: transform 300ms ease-in-out;
    }

    &.open {
      ${Button.style} {
        border-radius: 0 4px 4px 0;
      }

      span {
        transform: rotate(45deg);
      }

      .add-button-container {
        width: 0;
        margin-left: 0;
      }
    }

    ${Form.Input.style} {
      opacity: 1;
      height: 3.4rem;
      font-size: 1.4rem;
      font-weight: 500;
      color: ${colors.white};
      background-color: ${colors.blue3};
      border-color: ${colors.blue1};
      border-right: none;
      border-radius: 4px 0 0 4px;

      &::placeholder {
        color: ${colors.blue5};
        font-weight: normal;
      }
    }
  }

  ${Button.style} {
    padding: 0 1rem;

    &:focus {
      outline: none;
    }

    &.submit {
      margin-top: 5rem;
    }
  }
`;

class Editor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fixed: props.fixed,
      selectedTag: null,
      isAdding: false
    };

    this.modifyNewTag = this.modifyNewTag.bind(this);
    this.addTag = this.addTag.bind(this);
    this.toggleAddMode = this.toggleAddMode.bind(this);
    this.addField = this.addField.bind(this);
    this.revertField = this.revertField.bind(this);
    this.modifyField = this.modifyField.bind(this);
    this.removeField = this.removeField.bind(this);
    this.selectField = this.selectField.bind(this);
    // this.validate = this.validate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  findStatus(tag) {
    // maybe make it an util and write a test
    const originalTags = Object.keys(this.props.original);
    const fixedTags = Object.keys(this.state.fixed);

    if (!originalTags.includes(tag)) return status.ADD;
    if (!fixedTags.includes(tag)) return status.DEL;
    if (this.props.original[tag] !== this.state.fixed[tag]) return status.MOD;

    return '';
  }

  addField(tag, value) {
    var fixed = { ...this.state.fixed };
    fixed[tag] = value;

    this.setState({
      fixed
    });
  }

  removeField(tag) {
    var fixed = { ...this.state.fixed };
    Reflect.deleteProperty(fixed, tag);

    this.setState({
      fixed,
      selectedTag: null
    });
  }

  revertField(tag) {
    var fixed = { ...this.state.fixed };
    fixed[tag] = this.props.original[tag];

    this.setState({
      fixed,
      selectedTag: null
    });
  }

  modifyField(tag, value) {
    var fixed = { ...this.state.fixed };
    fixed[tag] = value;

    this.setState({
      fixed
    });
  }

  selectField(tag) {
    const isSelected = tag === this.state.selectedTag;

    this.setState({
      selectedTag: isSelected ? null : tag
    });
  }

  toggleAddMode() {
    console.log('TOGGLE');
    if (!this.state.isAdding) this.add.focus();
    else this.add.blur();

    this.setState({
      selectedTag: null,
      isAdding: !this.state.isAdding
    });
  }

  addTag(tag) {
    this.addField(tag);
    this.toggleAddMode();
    this.setState(
      {
        newTag: null
      },
      () => this.selectField(tag)
    );
  }

  modifyNewTag(value) {
    this.setState({
      newTag: value
    });
  }

  validate() {
    const fixed = this.state.fixed;
    return Object.keys(fixed)
      .map(tag => fixed[tag])
      .every(value => value);
  }

  handleSubmit() {
    if (this.validate()) this.props.submit(this.state.fixed);
  }

  renderAddButton() {
    const hasSelected = this.state.selectedTag !== null;

    const className = classnames('add-item', {
      inactive: hasSelected,
      open: this.state.isAdding
    });

    return (
      <div className={className}>
        <Form.Input
          value={this.state.newTag || ''}
          placeholder="Entrez un tag"
          innerRef={input => {
            this.add = input;
          }}
          onChange={e => this.modifyNewTag(e.target.value)}
          onClick={e => {
            if (e.target.value) this.addTag(e.target.value);
          }}
        />
        <div className="add-button-container">
          <Button
            shape="square"
            size="sm"
            context="primary"
            onClick={() => !hasSelected && this.toggleAddMode()}
          >
            <FontAwesome name="plus" />
          </Button>
        </div>
      </div>
    );
  }

  renderRemoved(removed) {
    const { original } = this.props;

    const removedFields = removed
      .sort((a, b) => a.localeCompare(b))
      .map(tag => (
        <Field
          tag={tag}
          status={this.findStatus(tag)}
          value={original[tag]}
          isSelected={false}
          isInactive
          addField={this.addField}
          key={tag}
        />
      ));

    return (
      <div className="removedList">
        <div>Removed items</div>
        {removedFields}
      </div>
    );
  }

  render() {
    const { original } = this.props;
    const { fixed, selectedTag } = this.state;
    const fixedTags = Object.keys(fixed);

    const fields = fixedTags
      .sort((a, b) => a.localeCompare(b))
      .map(tag => (
        <Field
          tag={tag}
          status={this.findStatus(tag)}
          value={fixed[tag]}
          originalValue={original[tag]}
          isSelected={selectedTag === tag}
          isInactive={selectedTag && selectedTag !== tag}
          addField={this.addField}
          revertField={this.revertField}
          modifyField={this.modifyField}
          selectField={this.selectField}
          removeField={this.removeField}
          key={tag}
        />
      ));

    const removed = Object.keys(original).filter(
      tag => !fixedTags.includes(tag)
    );

    return (
      <StyledDiv>
        <Form>{fields}</Form>
        {this.renderAddButton()}
        {removed.length > 0 && this.renderRemoved(removed)}
        <Button block onClick={this.handleSubmit} className="submit">
          Valider
        </Button>
      </StyledDiv>
    );
  }
}

Editor.propTypes = {
  // id: PropTypes.number.isRequired,
  // lon: PropTypes.number.isRequired,
  // lat: PropTypes.number.isRequired,
  original: PropTypes.object.isRequired,
  fixed: PropTypes.object.isRequired,
  submit: PropTypes.func,
  className: PropTypes.string
};

Editor.defaultProps = {
  submit: null,
  className: ''
};

Editor.displayName = 'Editor';

export default Editor;
