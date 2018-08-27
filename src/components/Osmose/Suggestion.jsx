import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classnames from 'classnames';

import { colors, osmoseSuggestionTypes as types } from 'constants/index';

const titleObj = {
  [types.NEW]: 'New data',
  [types.ORIGINAL]: 'Data in OSM',
  [types.MODIFICATION]: 'Suggestion n°'
};

const StyledDiv = styled.div`
  margin-top: 3rem;
  cursor: pointer;

  .title {
    font-size: 0.9rem;
    line-height: 2rem;
    text-align: center;
    color: ${p => p.theme.form.button.color};
    border-width: 1px;
    border-style: solid;
    border-color: ${p => p.theme.form.button.backgroundColor};
    border-radius: 2px 2px 0 0;
    background-color: ${p => p.theme.form.button.backgroundColor};
  }

  .infos {
    padding: 1rem 1.2rem;
    border-width: 1px;
    border-style: solid;
    border-color: ${colors.lightGray4};
    border-radius: 0 0 2px 2px;
    border-top: none;

    .info {
      display: flex;
      font-size: 0.9rem;
      line-height: 1.2rem;

      &::before {
        font-family: 'Font Awesome 5 Free';
        font-style: normal;
        font-weight: 600;
        font-size: 1rem;
        margin-right: 0.5rem;
        line-height: 2.8rem;
      }

      &.add {
        color: ${colors.green1};

        &::before {
          content: '\f067';
        }
      }

      &.mod {
        color: ${colors.orange1};

        &::before {
          content: '\f192';
        }
      }

      &.del {
        color: ${colors.red1};
        text-decoration: line-through;

        &::before {
          content: '\f068';
          line-height: 2.7rem;
        }
      }

      &.add,
      &.mod,
      &.del {
        &::before {
          font-family: FontAwesome;
          margin-right: 0.5rem;
        }
      }

      .tag {
        flex: 0 0 6rem;
        font-weight: bold;
      }
    }
  }

  &.fix .title,
  &.new .title {
    color: ${p => p.theme.form.button.primary.color};
    background-color: ${p => p.theme.form.button.primary.backgroundColor};
    border-color: ${p => p.theme.form.button.primary.backgroundColor};
  }

  @media (max-width: 50rem) {
    .infos .info .tag {
      flex: 0 0 30%;
    }
  }
`;

class Suggestion extends React.PureComponent {
  renderTag(tag, type) {
    return (
      <div className={classnames('info', type)} key={tag.k}>
        <div className="tag">{tag.k}</div>
        <div className="value">{tag.v}</div>
      </div>
    );
  }

  renderTags(tags) {
    if (!tags) return null;

    return <div className="infos">{tags.map(tag => this.renderTag(tag))}</div>;
  }

  renderTagFixes(data) {
    return (
      <div className="infos">
        {data.add.map(tag => this.renderTag(tag, 'add'))}
        {data.mod.map(tag => this.renderTag(tag, 'mod'))}
        {data.del.map(tag => this.renderTag(tag, 'del'))}
      </div>
    );
  }

  render() {
    const { osm, fixes, type, number, handleClick, className } = this.props;

    const suggestion =
      fixes !== null ? this.renderTagFixes(fixes) : this.renderTags(osm);

    const classNames = classnames(fixes ? 'fix' : 'osm', className);

    const baseTitle = titleObj[type];
    const title =
      type === types.MODIFICATION ? `${baseTitle}${number}` : baseTitle;

    return (
      <StyledDiv className={classNames} onClick={handleClick}>
        <div className="title">{title}</div>
        {suggestion}
      </StyledDiv>
    );
  }
}

Suggestion.propTypes = {
  type: PropTypes.oneOf(Object.keys(types)),
  number: PropTypes.number,
  osm: PropTypes.array,
  fixes: PropTypes.object,
  handleClick: PropTypes.func,
  className: PropTypes.string
};

Suggestion.defaultProps = {
  type: types.MODIFICATION,
  number: null,
  osm: null,
  fixes: null,
  handleClick: null,
  className: ''
};

Suggestion.displayName = 'Suggestion';

export default Suggestion;
