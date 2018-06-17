import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styled from 'styled-components';
import jsyaml from 'js-yaml';
import { colors } from 'constants/index';

import { DefaultTheme } from 'index';
import Scrollable from 'components/Scrollable';
import Loader from 'components/Loader';

const categoryMainIcons = {
  accessibility: 'wheelchair',
  animals: 'crow',
  arrows: 'arrow-right',
  'audio-video': 'microphone-alt',
  automotive: 'car',
  buildings: 'building',
  business: 'file-alt',
  charity: 'hand-holding-heart',
  chat: 'comment',
  chess: 'chess',
  code: 'code',
  communication: 'phone-volume',
  computers: 'desktop',
  currency: 'euro-sign',
  'date-time': 'clock',
  design: 'pencil-ruler',
  editors: 'edit',
  education: 'graduation-cap',
  emoji: 'surprise',
  files: 'folder-open',
  gender: 'venus-mars',
  hands: 'hand-point-right',
  health: 'heartbeat',
  images: 'image',
  interfaces: 'check-circle',
  logistics: 'dolly',
  maps: 'map',
  mathematics: 'superscript',
  medical: 'briefcase-medical',
  moving: 'box-open',
  objects: 'thumbtack',
  'payments-shopping': 'credit-card',
  shapes: 'shapes',
  spinners: 'spinner',
  sports: 'futbol',
  status: 'ban',
  travel: 'plane-departure',
  'users-people': 'child',
  vehicles: 'bus-alt',
  writing: 'pencil-alt'
};

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
      color: ${colors.anthracite2};

      &.selected {
        color: ${props => props.theme.backgroundColor};
      }
    }
  }
`;

class IconPicker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: null,
      categoriesOpened: false,
      icons: null,
      selectedIcon: props.selectedIcon,
      selectedStyle: props.selectedStyle,
      filter: null
    };

    this.setCategory = this.setCategory.bind(this);
    this.openCategories = this.openCategories.bind(this);
  }

  componentDidMount() {
    fetch(
      'https://raw.githubusercontent.com/FortAwesome/Font-Awesome/5.2.0/advanced-options/metadata/categories.yml'
    )
      .then(result => result.text())
      .then(text => {
        const { selectedIcon } = this.state;

        const categories = jsyaml.load(text);
        const categoryNames = Object.keys(categories);

        const defaultFilter = selectedIcon
          ? categoryNames.find(name =>
              categories[name].icons.includes(selectedIcon)
            )
          : categoryNames[0];

        this.setState({
          categories,
          filter: defaultFilter
        });
      })
      .catch(e => console.error(`Error in fetching categories ${e}`));

    fetch(
      'https://raw.githubusercontent.com/FortAwesome/Font-Awesome/5.2.0/advanced-options/metadata/icons.yml'
    )
      .then(result => result.text())
      .then(text => {
        const icons = jsyaml.load(text);
        this.setState({
          icons
        });
      })
      .catch(e => console.error(`Error in fetching icons ${e}`));
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

  makePrefix(style) {
    return `fa${style[0]}`;
  }

  makeName(name) {
    return `fa-${name}`;
  }

  renderLoader() {
    const { categories, icons } = this.state;

    const isLoading = !icons || !categories;

    if (isLoading)
      return (
        <DefaultTheme>
          <Loader centered />
        </DefaultTheme>
      );

    return null;
  }

  renderCategories() {
    const { categories, filter, icons, categoriesOpened } = this.state;

    const isLoading = !icons || !categories;
    if (isLoading) return null;

    const categoriesToDisplay = Object.keys(categories).map(name => {
      const className = classnames(
        'category',
        filter === name ? 'current' : ''
      );
      const icon = categories[name].icons.find(
        icon => categoryMainIcons[name] === icon
      );

      console.log('NAME', name);
      console.log('ICON', icon);
      const iconName = this.makeName(icon);
      const prefix = this.makePrefix(icons[icon].styles[0]);

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
    const {
      filter,
      icons,
      categories,
      selectedStyle,
      selectedIcon
    } = this.state;

    const isLoading = !icons || !categories;
    if (isLoading) return null;

    const keys = Object.keys(icons);
    const iconsToDisplay = [];

    const filteredIconNames = filter
      ? keys.filter(key => categories[filter].icons.includes(key))
      : keys;

    filteredIconNames.forEach(iconName => {
      icons[iconName].styles.forEach(style => {
        const prefix = this.makePrefix(style);
        const name = this.makeName(iconName);

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
      <Scrollable className="icons" position="right">
        {iconsToDisplay}
      </Scrollable>
    );
  }

  render() {
    const { className, ...props } = this.props;

    const { categories, filter, categoriesOpened } = this.state;
    const classes = classnames(className);

    const isLoading = !categories || !filter;

    let title = 'Loading';

    if (!isLoading)
      title = categoriesOpened ? 'Pick a category' : categories[filter].label;

    return (
      <StyledDiv className={classes} {...props}>
        <div className="header" onClick={this.openCategories}>
          {title}
        </div>
        <div className="content">
          {this.renderLoader()}
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
  selectedStyle: null
};

IconPicker.displayName = 'IconPicker';
IconPicker.style = StyledDiv;

export default IconPicker;
