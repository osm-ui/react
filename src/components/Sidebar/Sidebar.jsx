import React from 'react';
import PropTypes from 'prop-types';
import CSSTransition from 'react-transition-group/CSSTransition';
import styled from 'styled-components';
import classnames from 'classnames';
import FontAwesome from 'react-fontawesome';
import Loader from 'components/Loader';
import SidebarTitle from './Title';

const slideDuration = 300;

const StyledAside = styled.aside`
  z-index: 1000;
  top: 0;
  max-width: 100%;
  height: 100%;
  overflow-y: auto;
  transition: all ${slideDuration}ms ease-out;

  color: ${props => props.theme.color};
  background: ${props => props.theme.backgroundColor};
  border-color: ${props => props.theme.borderColor};
  border-style: ${props => props.theme.borderStyle};
  border-width: 0;
  box-shadow: ${props => props.theme.sidebar.boxShadow};

  &.scroll-content {
    display: flex;
    flex-direction: column;
    overflow-y: none;
  }

  &.container-parent {
    position: absolute;
  }
  &.container-root {
    position: fixed;
  }

  &.xs {
    width: 15rem;
  }
  &.sm {
    width: 25rem;
  }
  &.md {
    width: 40rem;
  }
  &.lg {
    width: 60rem;
  }
  &.maximized {
    width: 100%;
  }

  &.left {
    left: 0;
    border-right-width: ${props => props.theme.borderWidth};
  }

  &.right {
    right: 0;
    border-left-width: ${props => props.theme.borderWidth};
  }

  &.left.slide-appear,
  &.left.slide-enter,
  &.left.slide-exit.slide-exit-active,
  &.left.slide-exit.slide-exit-done {
    transform: translate(-150%, 0);
  }

  &.right.slide-appear,
  &.right.slide-enter,
  &.right.slide-exit.slide-exit-active,
  &.right.slide-exit.slide-exit-done {
    transform: translate(150%, 0);
  }

  &.left.slide-appear.slide-appear-active,
  &.left.slide-enter.slide-enter-active,
  &.left.slide-enter.slide-enter-done,
  &.left.slide-exit,
  &.right.slide-appear.slide-appear-active,
  &.right.slide-enter.slide-enter-active,
  &.right.slide-enter.slide-enter-done,
  &.right.slide-exit {
    transform: translate(0, 0);
  }

  &.left.maximized,
  &.right.maximized {
    border-width: 0;
  }

  .back-btn,
  .close-btn {
    color: ${props => props.theme.controlColor};
    background: transparent;
    border-width: 0;
    width: 5rem;
    height: 5rem;
    padding: 0;

    &:hover {
      color: ${props => props.theme.hoverControlColor};
    }
  }

  .back-btn {
    float: left;
    margin-right: 0.5rem;
  }

  .close-btn {
    float: right;
    margin-left: 0.5rem;
  }

  &.scroll-content .header {
    margin-bottom: 2rem;
  }

  .content {
    margin-top: 3rem;
    padding: 2rem;
  }

  &.scroll-content .content {
    overflow-y: auto;
    margin: 0;
    border-color: ${props => props.theme.borderColor};
    border-style: ${props => props.theme.borderStyle};
    border-width: 1px 0 1px 0;

    &::after {
      content: '';
      margin-top: 2rem;
      display: block;
    }
  }

  .content.loading {
    display: none;
  }

  &.scroll-content .footer {
    margin-top: 2rem;
  }
`;

class Sidebar extends React.Component {
  componentWillMount() {
    this.setState({ opened: this.props.opened });
  }

  componentDidMount() {
    if (this.props.onOpen) this.props.onOpen();

    if (this.props.maximized === true) {
      this.props.onMaximize();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.maximized !== nextProps.maximized) {
      if (nextProps.maximized === true) this.props.onMaximize();
      else this.props.onUnmaximize();
    }

    if (this.state.opened !== nextProps.opened) {
      this.setState({ opened: nextProps.opened });
    }
  }

  componentWillUnmount() {
    if (this.props.onClose) this.props.onClose();
  }

  _handleBackClick() {
    if (this.props.onClickBack) this.props.onClickBack();
  }

  _handleCloseClick() {
    this.setState({ opened: false });

    if (this.props.onClickClose) this.props.onClickClose();
    if (this.props.onClose) this.props.onClose();
  }

  render() {
    const {
      title,
      header,
      footer,
      children,
      loading,
      loaderLabel,
      position,
      width,
      maximized,
      container,
      scrollContent,
      className,
      ...rest
    } = this.props;

    const asideClasses = classnames(className, {
      [position]: true,
      [width]: true,
      maximized,
      [`container-${container}`]: true,
      'scroll-content': scrollContent
    });

    const contentClasses = classnames({
      content: true,
      loading
    });

    return (
      <CSSTransition
        classNames="slide"
        appear
        mountOnEnter
        unmountOnExit
        in={this.state.opened}
        timeout={slideDuration}
      >
        <StyledAside key="sidebar" className={asideClasses} {...rest}>
          <header className="header">
            {this.props.onClickBack && (
              <button
                className="back-btn"
                onClick={() => this._handleBackClick()}
              >
                <FontAwesome name="chevron-left" size="lg" />
              </button>
            )}
            <button
              className="close-btn"
              onClick={() => this._handleCloseClick()}
            >
              <FontAwesome name="close" size="lg" />
            </button>
            {title && <SidebarTitle inHeader>{title}</SidebarTitle>}
            <div className="clearfix" />
            {!loading && header && header}
          </header>

          <div className={contentClasses}>{children}</div>

          {!loading && footer && footer}

          {loading && <Loader centered label={loaderLabel} />}
        </StyledAside>
      </CSSTransition>
    );
  }
}

Sidebar.propTypes = {
  title: PropTypes.string,
  header: PropTypes.node,
  footer: PropTypes.node,
  loading: PropTypes.bool,
  loaderLabel: PropTypes.node,
  position: PropTypes.oneOf(['left', 'right']),
  width: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  opened: PropTypes.bool,
  maximized: PropTypes.bool,
  container: PropTypes.oneOf(['parent', 'root']),
  scrollContent: PropTypes.bool,
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
  onClickClose: PropTypes.func,
  onClickBack: PropTypes.func,
  onMaximize: PropTypes.func,
  onUnmaximize: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

Sidebar.defaultProps = {
  title: '',
  header: '',
  footer: '',
  loading: false,
  loaderLabel: '',
  position: 'left',
  width: 'md',
  maximized: false,
  opened: true,
  container: 'parent',
  scrollContent: false,
  onOpen: null,
  onClickClose: null,
  onClose: null,
  onClickBack: null,
  onMaximize: null,
  onUnmaximize: null,
  className: ''
};

Sidebar.displayName = 'Sidebar';

export default Sidebar;
