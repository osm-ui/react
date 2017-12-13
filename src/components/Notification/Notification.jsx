import React from 'react';
import PropTypes from 'prop-types';
import Transition from 'react-transition-group/Transition';
import styled from 'styled-components';
import classnames from 'classnames';
import FontAwesome from 'react-fontawesome';

import { contexts, contextIcons } from '../../constants';
import Button from '../Button';

const StyledAside = styled.aside`
  display: flex;
  position: absolute;
  z-index: 1000;
  width: 50%;
  max-width: 100%;
  height: 40px;
  margin: 2px;
  padding: 0 0.5rem;
  overflow-y: auto;
  opacity: 0;
  font-size: 1.3rem;
  color: ${props => props.theme.alert[props.context].color};
  background: ${props => props.theme.backgroundColor};
  border-color: ${props => props.theme.alert[props.context].borderColor};
  border-style: ${props => props.theme.borderStyle};
  border-width: 0;
  box-shadow: ${props => props.theme.sidebar.boxShadow};

  transition: height 1000ms ease-in-out, opacity 500ms ease-in-out,
    transform 500ms ease-in-out;

  &.position-top-right {
    top: 0;
    right: 0;
    border-left-width: ${props => props.theme.borderWidth};
    transform: translate(100%, 0);

    &.direction-vertical {
      transform: translate(0, -100%);
    }
  }

  &.position-top-left {
    top: 0;
    left: 0;
    border-right-width: ${props => props.theme.borderWidth};
    transform: translate(-100%, 0);

    &.direction-vertical {
      transform: translate(0, -100%);
    }
  }

  &.position-bottom-left {
    bottom: 0;
    left: 0;
    border-right-width: ${props => props.theme.borderWidth};
    transform: translate(-100%, 0);

    &.direction-vertical {
      transform: translate(0, 100%);
    }
  }

  &.position-bottom-right {
    bottom: 0;
    right: 0;
    border-left-width: ${props => props.theme.borderWidth};
    transform: translate(100%, 0);

    &.direction-vertical {
      transform: translate(0, 100%);
    }
  }

  &.position-top {
    top: 0;
    left: 0;
    right: 0;
    width: 50%;
    margin-left: auto;
    margin-right: auto;

    border-bottom-width: ${props => props.theme.borderWidth};
    transform: translate(100%, 0);

    &.direction-vertical {
      transform: translate(0, -100%);
    }
  }

  &.position-bottom {
    bottom: 0;
    left: 0;
    right: 0;
    width: 50%;
    margin-left: auto;
    margin-right: auto;

    border-top-width: ${props => props.theme.borderWidth};
    transform: translate(100%, 0);

    &.direction-vertical {
      transform: translate(0, 100%);
    }
  }

  .icon {
    display: inline-block;
    color: ${props => props.theme.alert[props.context].borderColor};
    background: transparent;
    border-width: 0;
    height: 100%;
    margin-right: 1rem;
    line-height: 40px;
  }

  .close-btn {
    display: inline-block;
    color: ${props => props.theme.controlColor};
    background: transparent;
    border-width: 0;
    height: 100%;
    padding: 0 10px;
    margin-left: 5px;

    &:hover {
      color: ${props => props.theme.hoverControlColor};
    }
  }

  .content {
    display: inline-flex;
    flex: 2 1 auto;
    height: 100%;
    align-items: center;
    justify-content: space-between;

    & * {
      margin-left: 5px;
    }
  }
`;

class Notification extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      shouldDisplay: true,
      timeout: null
    };

    this.close = this.close.bind(this);
    this.setTimeout = this.setTimeout.bind(this);
    this.clearTimeout = this.clearTimeout.bind(this);
  }

  close() {
    this.setState({ shouldDisplay: false });
  }

  setTimeout() {
    this.setState({
      timeout: setTimeout(this.close, this.props.timespan)
    });
  }

  clearTimeout() {
    this.setState({
      timeout: clearTimeout(this.state.timeout)
    });
  }

  render() {
    const {
      context,
      callToActions,
      onTimeoutClose,
      children,
      position,
      direction,
      pending,
      className
    } = this.props;

    const asideClasses = classnames(className, {
      [`position-${position}`]: true,
      [`direction-${direction}`]: true
    });

    const contentClasses = classnames('content');

    const transitionStyles = {
      entered: {
        opacity: 0.95,
        transform: 'translate(0,0)'
      },
      exiting: {
        height: 0
      }
    };

    const ctas = callToActions.map((cta, index) => (
      <Button key={index} size="xs" shape="square" onClick={cta.action}>
        {cta.text}
      </Button>
    ));

    return (
      <Transition
        in={this.state.shouldDisplay}
        timeout={1000}
        appear
        onEntered={pending ? () => null : this.setTimeout}
        onExited={onTimeoutClose}
      >
        {state => (
          <StyledAside
            key="notification"
            {...this.props}
            className={asideClasses}
            style={transitionStyles[state]}
            onMouseEnter={this.clearTimeout}
            onMouseLeave={pending ? () => null : this.setTimeout}
          >
            <div className="icon">
              <FontAwesome name={contextIcons[context]} size="lg" />
            </div>
            <div className={contentClasses}>
              {children}
              <div>{ctas}</div>
            </div>
            {!pending && (
              <button className="close-btn" onClick={() => this.close()}>
                <FontAwesome name="close" size="lg" />
              </button>
            )}
          </StyledAside>
        )}
      </Transition>
    );
  }
}

Notification.propTypes = {
  id: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
  onTimeoutClose: PropTypes.func,
  context: PropTypes.oneOf(contexts),
  position: PropTypes.oneOf([
    'top-left',
    'top-right',
    'bottom-right',
    'bottom-left',
    'top',
    'bottom'
  ]),
  direction: PropTypes.oneOf(['horizontal', 'vertical']),
  callToActions: PropTypes.array,
  pending: PropTypes.bool,
  timespan: PropTypes.number,
  className: PropTypes.string
};

Notification.defaultProps = {
  context: 'info',
  position: 'top-right',
  direction: 'horizontal',
  callToActions: [],
  pending: false,
  timespan: 4000,
  className: ''
};

Notification.displayName = 'Notification';

export default Notification;
