import React from 'react';
import PropTypes from 'prop-types';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import styled from 'styled-components';
import classnames from 'classnames';

const StyledAside = styled.aside`
  z-index: 1000;
  transition: all 0.1s ease-out;

  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  margin: ${props => props.theme.toolbar.margin};
  pointer-events: none;

  &.container-parent {
    position: absolute;
  }
  &.container-root {
    position: fixed;
  }

  &.direction-row {
    flex-direction: row;

    &.position-left-top,
    &.position-left-center,
    &.position-left-bottom {
      justify-content: flex-start;
    }

    &.position-center-top,
    &.position-center-center,
    &.position-center-bottom {
      justify-content: center;
    }

    &.position-right-top,
    &.position-right-center,
    &.position-right-bottom {
      justify-content: flex-end;
    }

    &.position-left-top,
    &.position-center-top,
    &.position-right-top {
      align-items: flex-start;
    }

    &.position-left-center,
    &.position-center-center,
    &.position-right-center {
      align-items: center;
    }

    &.position-left-bottom,
    &.position-center-bottom,
    &.position-right-bottom {
      align-items: flex-end;
    }
  }

  &.direction-column {
    flex-direction: column;

    &.position-left-top,
    &.position-center-top,
    &.position-right-top {
      justify-content: flex-start;
    }

    &.position-left-center,
    &.position-center-center,
    &.position-right-center {
      justify-content: center;
    }

    &.position-left-bottom,
    &.position-center-bottom,
    &.position-right-bottom {
      justify-content: flex-end;
    }

    &.position-left-top,
    &.position-left-center,
    &.position-left-bottom {
      align-items: flex-start;
    }

    &.position-center-top,
    &.position-center-center,
    &.position-center-bottom {
      align-items: center;
    }

    &.position-right-top,
    &.position-right-center,
    &.position-right-bottom {
      align-items: flex-end;
    }
  }

  &.direction-column {
    &.position-left-top,
    &.position-left-top.transition-appear,
    &.position-left-center,
    &.position-left-center.transition-appear,
    &.position-left-bottom,
    &.position-left-bottom.transition-appear {
      transform: translate(-150%, 0);
    }

    &.position-center-top,
    &.position-center-top.transition-appear {
      transform: translate(0, -150%);
    }

    &.position-center-bottom,
    &.position-center-bottom.transition-appear {
      transform: translate(0, 150%);
    }

    &.position-right-top,
    &.position-right-top.transition-appear,
    &.position-right-center,
    &.position-right-center.transition-appear,
    &.position-right-bottom,
    &.position-right-bottom.transition-appear {
      transform: translate(150%, 0);
    }
  }

  &.direction-row {
    &.position-left-top,
    &.position-left-top.transition-appear,
    &.position-center-top,
    &.position-center-top.transition-appear,
    &.position-right-top,
    &.position-right-top.transition-appear {
      transform: translate(0, -150%);
    }

    &.position-left-center,
    &.position-left-center.transition-appear {
      transform: translate(-150%, 0);
    }

    &.position-right-center,
    &.position-right-center.transition-appear {
      transform: translate(150%, 0);
    }

    &.position-left-bottom,
    &.position-left-bottom.transition-appear,
    &.position-center-bottom,
    &.position-center-bottom.transition-appear,
    &.position-right-bottom,
    &.position-right-bottom.transition-appear {
      transform: translate(0, 150%);
    }
  }

  &.direction-column,
  &.direction-row {
    &.position-center-center,
    &.position-center-center.transition-appear {
      opacity: 0;
    }
  }

  &.direction-column,
  &.direction-row {
    &.position-left-top,
    &.position-center-top,
    &.position-right-top,
    &.position-right-center,
    &.position-right-bottom,
    &.position-center-bottom,
    &.position-left-bottom,
    &.position-left-center,
    &.position-center-center {
      &.opened,
      &.opened.transition-appear.transition-appear-active {
        opacity: ${props => props.opacity};
        transform: translate(0, 0);
      }
    }
  }

  &.direction-column > * {
    margin-bottom: ${props => props.theme.toolbar.childrenMargin};
  }

  &.direction-row > * {
    margin-right: ${props => props.theme.toolbar.childrenMargin};
  }

  &.direction-column :last-child,
  &.direction-row :last-child {
    margin: 0;
  }
`;

class Toolbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      opened: props.opened
    };
  }

  componentDidMount() {
    if (this.props.opened === true) {
      this._triggerCallback('onOpen');
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      opened: nextProps.opened
    });

    if (this.props.opened !== nextProps.opened) {
      if (nextProps.opened === true) {
        this._triggerCallback('onOpen');
      } else {
        this._triggerCallback('onClose');
      }
    }
  }

  _triggerCallback(name) {
    if (this.props[name] !== null) {
      this.props[name]();
    }
  }

  render() {
    const {
      position,
      direction,
      size,
      shape,
      container,
      className,
      children,
      ...rest
    } = this.props;

    const asideClasses = classnames(className, {
      [`position-${position}`]: true,
      [`direction-${direction}`]: true,
      [`container-${container}`]: true,
      opened: this.state.opened
    });

    const childrenProps = {
      direction,
      position
    };

    if (size) {
      childrenProps.size = size;
    }

    if (shape) {
      childrenProps.shape = shape;
    }

    return (
      <CSSTransitionGroup
        transitionName="transition"
        transitionAppear
        transitionAppearTimeout={100}
        transitionEnter={false}
        transitionLeave={false}
      >
        <StyledAside className={asideClasses} {...rest}>
          {React.Children.map(children, child =>
            React.cloneElement(child, childrenProps)
          )}
        </StyledAside>
      </CSSTransitionGroup>
    );
  }
}

Toolbar.propTypes = {
  position: PropTypes.oneOf([
    'left-top',
    'center-top',
    'right-top',
    'right-center',
    'right-bottom',
    'center-bottom',
    'left-bottom',
    'left-center',
    'center-center'
  ]),
  direction: PropTypes.oneOf(['row', 'column']),
  size: PropTypes.oneOf(['', 'xs', 'sm', 'md', 'lg']),
  shape: PropTypes.oneOf(['', 'round', 'square']),
  container: PropTypes.oneOf(['parent', 'root']),
  opacity: PropTypes.number,
  opened: PropTypes.bool,
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.node
};

Toolbar.defaultProps = {
  position: 'left-top',
  direction: 'column',
  size: '',
  shape: '',
  container: 'parent',
  opacity: 1,
  opened: false,
  onOpen: null,
  onClose: null,
  className: '',
  children: ''
};

Toolbar.displayName = 'Toolbar';

export default Toolbar;
