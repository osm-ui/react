import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styled from 'styled-components';

import { makeName, makePrefix } from 'helpers/fontAwesome';
import icons from 'data/icons.json';
import categories from 'data/categories.json';

import { DefaultTheme } from 'index';
import Scrollable from 'components/Scrollable';
import Loader from 'components/Loader';

const StyledDiv = styled.div`
  width: 100%;
  height: 40rem;

  .header {
    width: 100%;
    height: 3rem;
    cursor: pointer;
    line-height: 3rem;
    background-color: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.color};
    text-align: center;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    border: none;
    border-bottom: 2px solid ${props => props.theme.color};
  }

  .content {
    position: relative;
    display: flex;
    height: 100%;

    ${Loader.style} {
      margin-top: 2rem;
    }
  }

  .categories {
    position: absolute;
    width: 4rem;

    transition: width 0.5s ease-in-out;

    &.opened {
      width: 100%;
    }

    .category {
      display: flex;
      align-items: center;
      padding: 0.3rem 0;
      font-size: 1.5rem;
      background-color: ${props => props.theme.backgroundColor};
      color: ${props => props.theme.color};
      font-size: 2rem;
      cursor: pointer;
      overflow: hidden;
      white-space: nowrap;

      i {
        flex: 0 0 4rem;
        font-size: 2.2rem;
        text-align: center;
      }

      div {
        flex: 1 0;
        padding-left: 3rem;
      }

      &.current {
        color: ${props => props.theme.backgroundColor};
        background-color: ${props => props.theme.color};
      }
    }
  }

  .icons {
    margin-left: 4rem;
    padding: 0.5rem 1rem;
    font-size: 2rem;

    i {
      cursor: pointer;
      font-size: 4rem;
      margin: 0.7rem;

      &.selected {
        color: ${props => props.theme.backgroundColor};
      }
    }
  }
`;

class IconPicker extends React.Component {
  constructor(props) {
    super(props);

    const categoryNames = Object.keys(categories);
    const filter = props.selectedIcon
      ? categoryNames.find(name =>
          categories[name].icons.includes(props.selectedIcon)
        )
      : categoryNames[0];

    this.state = {
      categoriesOpened: false,
      selectedIcon: props.selectedIcon,
      selectedStyle: props.selectedStyle,
      filter: filter
    };

    this.openCategories = this.openCategories.bind(this);
  }

  choose(style, iconName) {
    this.setState({
      selectedIcon: iconName,
      selectedStyle: style
    });
    this.props.onChoose(style, iconName);
  }

  setCategory(category) {
    this.setState({
      filter: category,
      categoriesOpened: false
    });
  }

  openCategories() {
    this.setState({
      categoriesOpened: !this.state.categoriesOpened
    });
  }

  renderCategories() {
    const { filter, categoriesOpened } = this.state;

    const categoriesToDisplay = Object.keys(categories).map(name => {
      const className = classnames(
        'category',
        filter === name ? 'current' : ''
      );

      const category = categories[name];

      const icon = category.icons.find(icon => category.main === icon);
      const iconName = makeName(icon);
      const prefix = makePrefix(icons[icon][0]);

      return (
        <div
          className={className}
          key={name}
          onClick={() => this.setCategory(name)}
        >
          <i className={`${prefix} ${iconName}`} />
          <div>{name}</div>
        </div>
      );
    });

    const classes = classnames('categories', categoriesOpened && 'opened');

    return <Scrollable className={classes}>{categoriesToDisplay}</Scrollable>;
  }

  renderIcons() {
    const { filter, selectedStyle, selectedIcon } = this.state;

    const keys = Object.keys(icons);
    const iconsToDisplay = [];

    const filteredIconNames = filter
      ? keys.filter(key => categories[filter].icons.includes(key))
      : keys;

    filteredIconNames.forEach(iconName => {
      icons[iconName].forEach(style => {
        const prefix = makePrefix(style);
        const name = makeName(iconName);

        const isSelected = style === selectedStyle && iconName === selectedIcon;

        const className = classnames(prefix, name, isSelected && 'selected');

        iconsToDisplay.push(
          <i
            key={`${prefix}_${iconName}`}
            className={className}
            onClick={() => this.choose(style, iconName)}
          />
        );
      });
    });

    return (
      <DefaultTheme>
        <Scrollable className="icons" position="right">
          {iconsToDisplay}
        </Scrollable>
      </DefaultTheme>
    );
  }

  render() {
    const { className, ...props } = this.props;

    const { filter, categoriesOpened } = this.state;
    const classes = classnames(className);

    const title = categoriesOpened
      ? 'Pick a category'
      : categories[filter].label;

    return (
      <StyledDiv className={classes} {...props}>
        <div className="header" onClick={this.openCategories}>
          {title}
        </div>
        <div className="content">
          {this.renderCategories()}
          {this.renderIcons()}
        </div>
      </StyledDiv>
    );
  }
}

IconPicker.propTypes = {
  className: PropTypes.string,
  selectedIcon: PropTypes.string,
  selectedStyle: PropTypes.string,
  onChoose: PropTypes.func
};

IconPicker.defaultProps = {
  className: '',
  selectedIcon: null,
  selectedStyle: null,
  onChoose: null
};

IconPicker.displayName = 'IconPicker';
IconPicker.style = StyledDiv;

export default IconPicker;
