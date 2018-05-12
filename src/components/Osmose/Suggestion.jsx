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

  &:hover {
    .infos {
      box-shadow: ${props => props.theme.titlebar.boxShadow};
    }
  }

  .title {
    font-size: 1.4rem;
    padding-top: 0.2rem;
    text-align: center;
    color: ${props => props.theme.form.button.color};
    border-width: 2px;
    border-style: solid;
    border-color: ${props => props.theme.form.button.borderColor};
    border-radius: 12px 12px 0 0;
    background-color: ${props => props.theme.form.button.backgroundColor};
  }

  .infos {
    padding: 0.7rem 1rem;
    padding-top: 1rem;
    border-width: 2px;
    border-style: solid;
    border-color: ${props => props.theme.form.button.borderColor};
    border-radius: 0 0 12px 12px;
    border-top: none;

    .info {
      display: flex;
      margin: 0.2rem 0;

      &.add {
        color: ${colors.green1};

        &::before {
          content: '\f067';
          font-family: FontAwesome;
          font-size: 1.3rem;
          line-height: 2.8rem;
          margin-right: 0.5rem;
        }
      }

      &.mod {
        color: ${colors.orange1};

        &::before {
          content: '\f192';
          font-family: FontAwesome;
          font-size: 1.3rem;
          line-height: 2.8rem;
          margin-right: 0.5rem;
        }
      }

      &.del {
        color: ${colors.red1};
        text-decoration: line-through;

        &::before {
          content: '\f068';
          font-family: FontAwesome;
          font-size: 1.3rem;
          line-height: 2.7rem;
          margin-right: 0.5rem;
        }
      }

      .tag {
        flex: 0 0 10rem;
        line-height: 2.7rem;
        font-size: 1.4rem;
        font-weight: bold;
      }

      .value {
        font-size: 1.5rem;
        line-height: 2.7rem;
      }
    }
  }

  &.fix .title,
  &.fix .infos,
  &.new .title,
  &.new .infos {
    border-color: ${props => props.theme.form.button.primary.borderColor};
  }

  &.fix .title,
  &.new .title {
    color: ${props => props.theme.form.button.primary.color};
    background-color: ${props =>
      props.theme.form.button.primary.backgroundColor};
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
