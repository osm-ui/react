import React from 'react';
import PropTypes from 'prop-types';
import Transition from 'react-transition-group/Transition';
import styled from 'styled-components';
import classnames from 'classnames';
import FontAwesome from 'react-fontawesome';

import Button from 'components/Button';

const contexts = ['info', 'success', 'warning', 'danger'];

const Container = styled.div`
  position: absolute;
  width: 50rem;
  max-width: 100%;

  @media (max-width: 50rem) {
    width: 100%;
    font-size: 1.2rem;
  }

  transition: transform 500ms ease-in-out;

  &.position-top-right {
    top: 0;
    right: 0;
    transform: translate(100%, 0);

    &.direction-vertical {
      transform: translate(0, -100%);
    }
  }

  &.position-top-left {
    top: 0;
    left: 0;
    transform: translate(-100%, 0);

    &.direction-vertical {
      transform: translate(0, -100%);
    }
  }

  &.position-bottom-left {
    bottom: 0;
    left: 0;
    transform: translate(-100%, 0);

    &.direction-vertical {
      transform: translate(0, 100%);
    }
  }

  &.position-bottom-right {
    bottom: 0;
    right: 0;
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
    transform: translate(100%, 0);

    &.direction-vertical {
      transform: translate(0, 100%);
    }
  }
`;

const StyledAside = styled.aside`
  display: flex;
  z-index: 1000;
  width: 100%;
  height: 4rem;
  margin: 0.4rem 0;
  padding: 0 2rem;
  overflow-y: auto;
  font-size: ${props => props.theme.notification.fontSize};
  color: ${props => props.theme.notification[props.context].color};
  background: ${props =>
    props.theme.notification[props.context].backgroundColor};
  border-color: ${props => props.theme.notification[props.context].borderColor};
  border-style: ${props => props.theme.borderStyle};
  border-width: 0;
  box-shadow: ${props => props.theme.sidebar.boxShadow};

  transition: height 500ms ease-in-out, margin 500ms ease-in-out;

  &.position-top-right,
  &.position-bottom-right {
    border-left-width: ${props => props.theme.borderWidth};
  }

  &.position-top-left,
  &.position-bottom-left {
    border-right-width: ${props => props.theme.borderWidth};
  }

  &.position-top {
    border-bottom-width: ${props => props.theme.borderWidth};
  }

  &.position-bottom {
    border-top-width: ${props => props.theme.borderWidth};
  }

  .close-btn {
    display: inline-block;
    position: absolute;
    top: 0;
    right: 0;
    width: 4rem;
    height: 4rem;
    line-height: 4rem;
    padding: 0;
    color: ${props => props.theme.notification[props.context].controlColor};
    background: none;
    border: none;

    &:hover {
      color: ${props =>
        props.theme.notification[props.context].hoverControlColor};
    }
  }

  .content {
    display: inline-flex;
    flex: 2 1 auto;
    height: 100%;
    align-items: center;
    justify-content: space-between;

    & * {
      margin-left: 0.5rem;
    }
  }
`;

class Notification extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      opened: true,
      closing: false,
      timeout: null
    };

    this.close = this.close.bind(this);
    this.setTimeout = this.setTimeout.bind(this);
    this.clearTimeout = this.clearTimeout.bind(this);
  }

  close() {
    this.setState({ opened: false });
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
        transform: 'translate(0, 0)'
      }
    };

    const closingTransitionStyles = {
      exiting: {
        height: 0,
        margin: 0
      }
    };

    const ctas = callToActions.map((cta, index) => (
      <Button key={index} size="xs" shape="square" onClick={cta.action}>
        {cta.text}
      </Button>
    ));

    return (
      <Transition
        in={this.state.opened}
        timeout={500}
        appear
        onEntered={pending ? () => null : this.setTimeout}
        onExited={() => this.setState({ closing: true })}
      >
        {state1 => (
          <Container className={asideClasses} style={transitionStyles[state1]}>
            <Transition
              in={!this.state.closing}
              timeout={500}
              appear
              onExited={onTimeoutClose}
            >
              {state2 => (
                <StyledAside
                  key="notification"
                  {...this.props}
                  className={asideClasses}
                  style={closingTransitionStyles[state2]}
                  onMouseEnter={this.clearTimeout}
                  onMouseLeave={pending ? () => null : this.setTimeout}
                >
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
          </Container>
        )}
      </Transition>
    );
  }
}

Notification.contexts = contexts;

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
